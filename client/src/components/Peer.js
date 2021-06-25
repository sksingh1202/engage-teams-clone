import Peer from "simple-peer";

// called when "joiner" creates a peer connection
export function createPeer(userToSignal, callerID, stream, socketRef) {
  const peer = new Peer({
    initiator: true,
    trickle: false,
    // stream,
  });

  // "signal" is triggered once the peer object is created
  peer.on("signal", (data) => {
    // create an offer to the peer via the backend
    socketRef.current.emit("offer", { userToSignal, callerID, data });
  });

  return peer;
}

// called when person in the call makes a peer connection with the "joiner"
export function addPeer(incomingSignal, callerID, stream, socketRef) {
  const peer = new Peer({
    initiator: false, // person who is already in the call is not the initiator
    trickle: false,
    // stream,
  });

  // "signal" is triggered once the peer object is created
  peer.on("signal", (data) => {
    // accept the offer via the backend
    socketRef.current.emit("answer", { data, callerID });
  });

  // establish connection
  peer.signal(incomingSignal);

  return peer;
}
