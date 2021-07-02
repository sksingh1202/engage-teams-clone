import { useState } from "react";
import { v1 as uuid } from "uuid"; // to generate random roomId(s)
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import VideocamIcon from "@material-ui/icons/Videocam";
import CommentIcon from "@material-ui/icons/Comment";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import meeting_img from "./meeting.jpg";
import logo_img from "./logo.jpg";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
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
  const [open, setOpen] = useState(false);
  const [meetLink, setMeetLink] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const create = () => {
    const id = uuid();
    props.history.push(`/room/${id}`); // redirect to a randomly generated room and push to history stack
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
      setOpen(true);
      setMeetLink("");
    } else {
      const id = getId(meetLink);
      props.history.push(`/room/${id}`); // redirect to the specified room and push to history stack
    }
  };

  return (
    <div>
      <header className="text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <img src={logo_img} className="h-16 w-20" />
          <span className="ml-3 text-xl">TEEMS</span>
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
              <button className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Invalid meeting link!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default CreateRoom;
