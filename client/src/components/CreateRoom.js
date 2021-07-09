import { useState, useEffect } from "react";

import { v1 as uuid } from "uuid"; // to generate random roomId(s)
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "@auth0/auth0-react";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import VideocamIcon from "@material-ui/icons/Videocam";
import CommentIcon from "@material-ui/icons/Comment";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import Slide from "@material-ui/core/Slide";

import { createUser, addUser } from "./CreateUser";
import { createChat, sendChatMsg, getChatMsgs } from "./CreateChat";
import meeting_img from "./meeting.jpg";
import logo_img from "./logo.jpg";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const TransitionRight = (props) => {
  return <Slide {...props} direction="right" />;
};

const isValidHttpUrl = (string) => {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const CreateRoom = (props) => {
  const classes = useStyles();
  const [openSnack, setOpenSnack] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [meetLink, setMeetLink] = useState("");
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const create = async () => {
    if (!isAuthenticated) loginWithRedirect();
    if (isAuthenticated) {
      const id = uuid();
      const chatId = await createChat(user, id);
      if (chatId) {
        props.history.push(`/room/${id}`); // redirect to a randomly generated room and push to history stack
      } else {
        setOpenDialog(true);
        console.log("Error");
      }
    }
  };

  const redirectToChat = () => {
    if (!isAuthenticated) loginWithRedirect();
    if(isAuthenticated) {
      props.history.push({ // redirect to the chat corresponding to the username
        pathname: "/chat",
        state: {
          username: user.email
        }
      });
    }
  };

  const getId = () => {
    let n = meetLink.lastIndexOf("/");
    let mainLink = meetLink.substring(0, n + 1);
    let meetId = meetLink.substring(n + 1);
    if (
      mainLink === "http://localhost:3000/room/" ||
      mainLink === "https://localhost:3000/room/" ||
      mainLink === "https://engage-teams-clone.herokuapp.com/room/" ||
      mainLink === "http://engage-teams-clone.herokuapp.com/room/"
    )
      return meetId;
    else return "";
  };

  const joinCall = () => {
    if (!isValidHttpUrl(meetLink) || getId(meetLink).length === 0) {
      setOpenSnack(true);
      setMeetLink("");
    } else {
      if (!isAuthenticated) loginWithRedirect();
      if (isAuthenticated) {
        const id = getId(meetLink);
        props.history.push(`/room/${id}`); // redirect to the specified room and push to history stack
      }
    }
  };

  const makeUser = async () => {
    const id = await createUser(user);
    if(!id) {
      setOpenDialog(true);
      setTimeout(logout, 2500);
    }
  }

  useEffect(() => {
    if (isAuthenticated) makeUser();
  }, [isAuthenticated]);

  return (
    <div>
      <header className="text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <img src={logo_img} className="h-16 w-20" />
          <span className="ml-3 text-xl">TEEMS</span>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {isAuthenticated ? (
              <button
                className="mt-5 md:mt-0 md:mr-5 inline-flex text-white bg-indigo-500 border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                <a className="cursor-pointer">Logout</a>
              </button>
            ) : (
              <button
                className="mt-5 md:mt-0 md:mr-5 inline-flex text-white bg-indigo-500 border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={() => loginWithRedirect()}
              >
                <a className="cursor-pointer">Login</a>
              </button>
            )}
          </nav>
        </div>
      </header>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-3xl md:text-4xl lg:text-5xl mb-4 font-bold text-gray-900">
              Microsof Teems
            </h1>

            <p className="mb-8 leading-relaxed text-xl md:text-2xl lg:text-3xl">
              Meet, chat, and call in just one place.
            </p>
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={create}
              >
                <span className="mr-3">
                  <VideocamIcon />
                </span>
                New meeting
              </button>
              <button
                className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={redirectToChat}
              >
                <span className="mr-3">
                  <CommentIcon />
                </span>
                Chat
              </button>
            </div>
            <div className="mt-5 relative flex-col xl:flex-row flex w-full flex-wrap items-stretch mb-3 space-y-5 xl:space-y-0 xl:space-x-5">
              <div className="flex-1">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-3">
                  <KeyboardIcon />
                </span>
                <input
                  autoComplete="off"
                  id="meeting-link"
                  type="text"
                  placeholder="Enter the link to join meeting"
                  className="leading-3 px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
                  value={meetLink}
                  onChange={(e) => setMeetLink(e.target.value)}
                />
              </div>
              <button
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={joinCall}
              >
                <span className="mr-3">
                  <AddIcCallIcon />
                </span>
                Join meeting
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={meeting_img}
            />
          </div>
        </div>
      </section>
      <div className={classes.root}>
        <Snackbar
          open={openSnack}
          autoHideDuration={4000}
          onClose={() => setOpenSnack(false)}
          // TransitionComponent={TransitionRight}
        >
          <Alert onClose={() => setOpenSnack(false)} severity="error">
            Invalid meeting link!
          </Alert>
        </Snackbar>
      </div>
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Problem connecting"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              It seems that something is temporarily wrong with your
              network connection. Please check your internet connection
              and try again.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={() => setOpenDialog(false)} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
    </div>
    </div>
  );
};

export default CreateRoom;
