// built in react
import { useEffect, useRef, useState } from "react";

// external packages
import io from "socket.io-client";
import styled from "styled-components";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AssignmentIcon from "@material-ui/icons/Assignment";
import axios from "axios";
// import Picker from 'emoji-picker-react';
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from "@material-ui/core/styles";

// internal components
import { createPeer, addPeer } from "./Peer";
import { addUser } from "./CreateUser";
import { sendChatMsg, getChatMsgs } from "./CreateChat";
import Menubar from "./Menubar";
import "./Room.css";

const DOMPurify = require("dompurify")(window);

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
  snackRoot: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  button: {
    position: "absolute",
    margin: theme.spacing(1),
    marginLeft: theme.spacing(4),
    top: 0,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  }, [props.peer]);
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
  const [msgs, setMsgs] = useState([]);
  const [msg, setMsg] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [screenShare, setScreenShare] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState([""]);
  const [dialog, setDialog] = useState("");
  // const [chosenEmoji, setChosenEmoji] = useState(null);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const userStream = useRef();
  const msgRef = useRef();
  const joiningSocket = useRef();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const theme = useTheme();

  // const onEmojiClick = (event, emojiObject) => {
  //   let newMsg = msg;
  //   msg += emojiObject.emoji;
  //   console.log(emojiObject.emoji);
  //   setChosenEmoji(newMsg);
  // };

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const roomID = props.match.params.roomID;

  useEffect(() => {
    let h = window.screen.height;
    setHeight(h);
    window.addEventListener("resize", () => {
      let new_h = window.screen.height;
      setHeight(new_h);
    });
    socketRef.current = io.connect("/");

    const videoChat = async () => {
      /*****  add a try-catch here to check whether user has given the permission. ****/
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      userStream.current = stream;
      userVideo.current.srcObject = stream;
      setAudio({ isMuted: false, audioTracks: stream.getAudioTracks() });
      setVideo({ isOn: true, videoTracks: stream.getVideoTracks() });

      socketRef.current.emit("join-room", {
        roomID: roomID,
        email: user.email,
      });

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
        addUser(user, roomID);
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

      socketRef.current.on("reload_msgs", (id) => {
        fetchChatMsgs();
      });
    };

    const getRooms = async () => {
      const config = {
        method: "get", // get the validRooms
        url: "/get_rooms",
      };
      const response = await axios(config); // send request using axios
      // console.log(response);
      return response.data.validRooms;
    };

    const admitDeny = async () => {
      if(!props.location.state || props.location.state.username !== user.email) {
        const validRooms = await getRooms();
        if(!Array.prototype.includes.call(validRooms, roomID)) {
          setDialog("invalid roomId");
          return false;
        }
      }

      socketRef.current.emit("permission", {
        userName: user.name || user.email,
        roomID: roomID,
        email: user.email,
      });

      socketRef.current.on("no permit required", async () => {
        try {
          await videoChat();
          await fetchChatMsgs();
          setSnackMsg([`Welcome to the meet, ${user.first_name || user.name || user.email}`]);
        } catch (error) {
          // "check your connection and try again";
        }
      });

      socketRef.current.on("permit?", (payload) => {
        // console.log("payload: ", payload);
        const userAlias = payload.userAlias;
        const socketid = payload.id;
        joiningSocket.current = socketid; // this is a ref
        setDialog(`1 ${userAlias}`);
        // identify popup using popup[0] = 1
      });

      socketRef.current.on("denied", () => {
        setDialog("denied to join");
        // redirect to home page
      });

      socketRef.current.on("allowed", async (chatId) => {
        // allowed in the call
        try {
          await videoChat();
          await fetchChatMsgs();
          setSnackMsg([`Welcome to the meet, ${user.first_name || user.name || user.email}`]);
        } catch (error) {
          // "check your connection and try again";
        }
      });
    };

    if (!isLoading && isAuthenticated) {
      admitDeny();
    } else if(!isLoading) loginWithRedirect();
    // console.log(msgs);
  }, [isAuthenticated, isLoading, loginWithRedirect, roomID, user]);

  const leaveRoom = () => {
    userVideo.current.srcObject.getTracks().forEach((track) => track.stop());
    peersRef.current = null;
    setPeers(peersRef.current);
    socketRef.current.disconnect();
    props.history.push(`/`);
  };

  const calcRows = (count) => {
    if (count <= 2) return 30;
    if (count <= 6) return 15;
    if (count <= 9) return 10;
    if (count <= 16) return 7;
  };

  const calcCols = (count) => {
    if (count === 1) return 60;
    if (count <= 4) return 30;
    if (count <= 9) return 20;
    if (count <= 16) return 15;
  };

  const fetchChatMsgs = async () => {
    const latestMsgs = await getChatMsgs(user, roomID);
    // console.log(`Latest Messages: ${latestMsgs}`);
    // console.log(latestMsgs);
    if (latestMsgs && typeof latestMsgs[Symbol.iterator] === "function") {
      // console.log("setting latestMsgs");
      setMsgs([...latestMsgs]);
    }
    // console.log(msgs);
  };

  const getTime = (timeStr) => {
    const time = timeStr.substring(11, 19);
    let hr = parseInt(time.substr(0, 2)), min = parseInt(time.substr(3, 5)),  _m = "AM";
    min += 30;
    hr += 5;
    if(min >= 60) {
      min -= 60;
      hr += 1;
    }
    if(hr >= 24) hr -= 24;
    if(hr > 12) {
      hr -= 12;
      _m = "PM";
    }
    const indiaTime = `${hr}:${min} ${_m}`;
    return indiaTime;
  };

  const getInitials = (sender) => {
    let ans = "";
    if (sender.first_name) ans += sender.first_name.substr(0, 1).toUpperCase();
    if (sender.last_name) ans += sender.last_name.substr(0, 1).toUpperCase();
    return ans;
  };

  const sendMsg = async () => {
    if (msg.length === 0) setOpenSnack(true);
    else {
      await sendChatMsg(user, msg, roomID);
      // const response = await sendChatMsg(user, msg, roomID);
      socketRef.current.emit("reload");
      setMsg("");
      // console.log(response);
      fetchChatMsgs();
    }
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

      <div
        style={{
          position: "absolute",
          height: "85%",
          width: "100%",
          top: "7%",
        }}
      >
        <div className="flex justify-between" style={{ minHeight: "100%" }}>
          {/* Video stream section */}
          <section className="flex">
            {/* Messages sidebar */}
            <div
              id="chat-div"
              className={
                (showChat ? "" : "hidden") +
                " bg-gray-100 text-gray-700 sm:max-w-sm p-4 border-t border-b-4 border-gray-300 flex flex-col justify-between"
              }
            >
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold">Meeting chat</h1>
                </div>

                <div className="py-3 flex justify-center items-center space-x-4 text-sm">
                  <svg
                    className="w-6 h-6 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>

                  <h2 className="font-semibold">Meeting started</h2>
                  {/* <span className="text-xs">10:12</span> */}
                </div>

                {/* Div for messages */}
                <div
                  style={{ maxHeight: 23.2 + "rem" }}
                  className="text-sm mt-4 space-y-4 overflow-scroll scrollbar-hidden"
                >
                  {/* Individual message */}
                  {msgs.map((msg) => (
                    <div className="flex justify-items-stretch" key={parseInt(msg.id)}>
                      <span className="bg-indigo-900 text-gray-300 h-8 w-10 p-2 rounded-full flex items-center justify-center mt-2 z-10">
                        {getInitials(msg.sender)}
                      </span>
                      <div className="-ml-2 py-2 px-4 bg-gray-200 rounded flex-grow">
                        <div className="flex flex-grow justify-between items-center">
                          <h1 className="font-semibold text-gray-800">
                            {msg.sender.first_name || msg.sender.username}
                          </h1>
                          <div className="text-xs">
                            {getTime(msg.created)}
                          </div>
                        </div>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(msg.text),
                          }}
                        ></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex mt-10">
                <input
                  type="text"
                  className="p-3 bg-transparent border border-r-0 border-gray-400 text-sm outline-none rounded-tl rounded-bl w-full tracking-wide"
                  placeholder="Type a new message"
                  value={msg}
                  ref={msgRef}
                  onChange={(e) => setMsg(e.target.value)}
                  onKeyUp={(e) => {
                    if(e.key === "Enter" || e.keyCode === 13) sendMsg(e)
                  }}
                />
                {/* <Picker onEmojiClick={onEmojiClick} /> */}
                <button
                  className="p-2 bg-blue-800 text-gray-200 rounded-tr rounded-br"
                  onClick={(e) => sendMsg(e)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Menubar
        audio={audio}
        video={video}
        screenShare={screenShare}
        showChat={showChat}
        setAudio={setAudio}
        setVideo={setVideo}
        setScreenShare={setScreenShare}
        setShowChat={setShowChat}
        leaveRoom={leaveRoom}
        peersRef={peersRef}
        userStream={userStream}
      />

      {dialog[0] === "1" && (
        <div>
          <Dialog
            fullScreen={fullScreen}
            open={true}
            onClose={() => {
              socketRef.current.emit("permit status", {
                allowed: false,
                id: joiningSocket.current,
              });
              setDialog("");
            }}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Someone wants to join this meeting"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {`Hey, ${dialog.substr(2)} wants to join the call.`}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={() => {
                  socketRef.current.emit("permit status", {
                    allowed: false,
                    id: joiningSocket.current,
                  });
                  setDialog("");
                }}
                color="primary"
              >
                Deny Entry
              </Button>
              <Button
                onClick={() => {
                  socketRef.current.emit("permit status", {
                    allowed: true,
                    id: joiningSocket.current,
                  });
                  setDialog("");
                }}
                color="primary"
                autoFocus
              >
                Admit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}

      {dialog === "denied to join" && (
        <div>
          <Dialog
            fullScreen={fullScreen}
            open={true}
            onClose={() => {
              setDialog("");
              // redirection to home page on Close
              window.location.href = window.location.origin;
            }}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Permission Denied"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {
                  "You are not allowed to join this call. Kindly contact the organizer for the permission."
                }
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={() => {
                  setDialog("");
                  // redirection to home page on Close
                  window.location.href = window.location.origin;
                }}
                color="primary"
              >
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}

      {dialog === "invalid roomId" && (
        <div>
          <Dialog
            fullScreen={fullScreen}
            open={true}
            onClose={() => {
              setDialog("");
              // redirection to home page on Close
              window.location.href = window.location.origin;
            }}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Unable to Join the Meeting"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {
                  "This Meeting URL is invalid. Please double-check the Meeting URL and try again."
                }
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={() => {
                  setDialog("");
                  // redirection to home page on Close
                  window.location.href = window.location.origin;
                }}
                color="primary"
              >
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}

      <div className={classes.snackRoot}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={openSnack}
          autoHideDuration={6000}
          onClose={() => setOpenSnack(false)}
        >
          <Alert onClose={() => setOpenSnack(false)} severity="error">
            The message cannot be empty!
          </Alert>
        </Snackbar>
      </div>
        <div className={classes.snackRoot}>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={snackMsg[0].length !== 0}
            autoHideDuration={6000}
            onClose={() => setSnackMsg([""])}
          >
            <Alert
              onClose={() => setSnackMsg([""])}
              severity="success"
            >
              { snackMsg[0] }
            </Alert>
          </Snackbar>
        </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<AssignmentIcon />}
          onClick={() => {
            navigator.clipboard.writeText(window.location.href.toString());
            setSnackMsg(["Link Copied To Clipboard"]);
          }}
        >
          Copy Meeting Link
        </Button>
      </div>
    </Container>
  );
};

export default Room;
