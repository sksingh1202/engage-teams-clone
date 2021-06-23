// built in react
import { useEffect, useRef, useState } from "react";

// external packages
import io from "socket.io-client";
import styled from "styled-components";

// internal components
import { createPeer, addPeer } from "./Peer";

const Container = styled.div`
  padding: 20px;
  display: flex;
  height: 100vh;
  width: 90%;
  margin: auto;
  flex-wrap: wrap;
`;

const StyledVideo = styled.video`
  height: 40%;
  width: 50%;
`;

const Video = (props) => {
  const ref = useRef();

  useEffect(() => {
    props.peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);

  return <StyledVideo playsInline autoPlay ref={ref} />;
};

const constraints = {
  audio: { echoCancellation: true },
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
};

const Room = (props) => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const roomID = props.match.params.roomID;

  useEffect(() => {
    videoChat();
  }, []);

  async function videoChat() {
    socketRef.current = io.connect("/");
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    userVideo.current.srcObject = stream;
    socketRef.current.emit("join-room", roomID);

    socketRef.current.on("room-full", () =>
      console.log("Sorry the room is full!")
    );

    socketRef.current.on("all-users", (users) => {
      const peers = [];
      users.forEach((peerUserID) => {
        const peer = createPeer(
          peerUserID,
          socketRef.current.id,
          stream,
          socketRef
        );
        peersRef.current.push({
          peerID: peerUserID,
          peer,
        });
        peers.push(peer);
      });
      setPeers(peers);
    });

    socketRef.current.on("user-joined", (payload) => {
      const peer = addPeer(payload.data, payload.callerID, stream, socketRef);
      peersRef.current.push({
        peerID: payload.callerID,
        peer,
      });

      setPeers((users) => [...users, peer]);
    });

    socketRef.current.on("receiving-answer", (payload) => {
      const item = peersRef.current.find((p) => p.peerID === payload.id);
      item.peer.signal(payload.data);
    });
  }

  return (
    <Container>
      <StyledVideo muted ref={userVideo} autoPlay playsInline />
      {peers.map((peer, index) => {
        return <Video key={index} peer={peer} />;
      })}
    </Container>
  );
};

export default Room;
