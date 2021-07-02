// built in react
import { useEffect, useRef, useState } from "react";

// external packages
import io from "socket.io-client";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

// internal components
import { createPeer, addPeer } from "./Peer";
import Menubar from "./Menubar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#202124",
  },
  gridList: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: 0,
    flexWrap: "wrap",
    listStyle: "none",
    overflow: "auto",
    justifyContent: "center",
  },
}));

const Container = styled.div`
  position: absolute;
  top: 10px;
  bottom: 10px;
  height: 100%;
  width: 100%;
  margin: auto;
  background-color: #202124;
`;

const StyledVideo = styled.video`
  position: absolute;
  right: 1%;
  bottom: 5%;
  height: 16%;
  width: 20%;
  z-index: 1;
`;

const constraints = {
  audio: { echoCancellation: true },
  video: {
    width: { min: 1280 },
    height: { min: 720 },
  },
};

const Video = (props) => {
  const ref = useRef();
  useEffect(() => {
    props.peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
  }, []);
  return (
    <video
      height="100%"
      width="100%"
      playsInline
      autoPlay
      controls
      ref={ref}
      style={{ 
        padding: 0,
        objectFit: "cover",
        position: "absolute",
        right: 0,
        bottom: 0,
        minWidth: "100%",
        minHeight: "100%",
        width: "auto",
        height: "auto",
        backgroundSize: "cover",
        overflow: "hidden",
        }}
    />
  );
};

const Room = (props) => {
  const [peers, setPeers] = useState([]);
  const [audio, setAudio] = useState({});
  const [video, setVideo] = useState({});
  const [height, setHeight] = useState();
  const [screenShare, setScreenShare] = useState(false);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const userStream = useRef();

  useEffect(() => {
    let h = window.screen.height;
    setHeight(h);
    window.addEventListener("resize", () => {
      let new_h = window.screen.height;
      console.log(new_h);
      setHeight(new_h);
    });

    const roomID = props.match.params.roomID;
    const videoChat = async () => {
      socketRef.current = io.connect("/");
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      userStream.current = stream;
      userVideo.current.srcObject = stream;
      setAudio({ isMuted: false, audioTracks: stream.getAudioTracks() });
      setVideo({ isOn: true, videoTracks: stream.getVideoTracks() });
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
          peers.push({
            peerID: peerUserID,
            peer,
          });
        });
        setPeers([...peersRef.current]);
      });

      socketRef.current.on("user-joined", (payload) => {
        const peer = addPeer(payload.data, payload.callerID, stream, socketRef);

        peersRef.current.push({
          peerID: payload.callerID,
          peer,
        });
        setPeers([...peersRef.current]);
      });

      socketRef.current.on("receiving-answer", (payload) => {
        const item = peersRef.current.find((p) => p.peerID === payload.id);
        item.peer.signal(payload.data);
      });

      socketRef.current.on("user-left", (id) => {
        const peerLeft = peersRef.current.find((p) => p.peerID === id);
        if (peerLeft) {
          peerLeft.peer.destroy();
        }
        const newPeers = peersRef.current.filter((p) => p.peerID !== id);
        peersRef.current = newPeers;
        setPeers(newPeers);
      });
    };
    videoChat();
  }, []);

  const leaveRoom = () => {
    userVideo.current.srcObject.getTracks().forEach((track) => track.stop());
    peersRef.current = null;
    setPeers(peersRef.current);
    socketRef.current.disconnect();
    props.history.push(`/`);
  };

  const calcRows = (count) => {
    console.log("Rows: " + count);
    if (count <= 2) return 30;
    if (count <= 6) return 15;
    if (count <= 9) return 10;
    if (count <= 16) return 7;
  };

  const calcCols = (count) => {
    console.log("Cols: " + count);
    if (count === 1) return 60;
    if (count <= 4) return 30;
    if (count <= 9) return 20;
    if (count <= 16) return 15;
  };

  const classes = useStyles();

  return (
    <Container>
      <StyledVideo controls muted ref={userVideo} autoPlay playsInline />
      <div className={classes.root}>
        <GridList
          cellHeight={Math.floor(height / 35)}
          cols={60}
          className={classes.gridList}
        >
          {peers.map((peer) => (
            <GridListTile
              rows={calcRows(peers.length)}
              cols={calcCols(peers.length)}
              key={peer.peerID}
            >
              <Video peer={peer.peer} />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <Menubar
        audio={audio}
        video={video}
        screenShare={screenShare}
        setAudio={setAudio}
        setVideo={setVideo}
        setScreenShare={setScreenShare}
        leaveRoom={leaveRoom}
        peersRef={peersRef}
        userStream={userStream}
      />
    </Container>
  );
};

export default Room;
