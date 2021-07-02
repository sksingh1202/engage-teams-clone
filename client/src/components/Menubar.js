import React from "react";
import { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamIcon from "@material-ui/icons/Videocam";
import VideocamOffIcon from "@material-ui/icons/VideocamOff";
import CallEndIcon from "@material-ui/icons/CallEnd";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import StopScreenShareIcon from "@material-ui/icons/StopScreenShare";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    bottom: "2%",
    width: "100%",
    backgroundColor: "#202124",
  },
});

const Menubar = ({
  audio,
  video,
  screenShare,
  setAudio,
  setVideo,
  setScreenShare,
  leaveRoom,
  peersRef,
  userStream,
}) => {
  const screenTrackRef = useRef();
  const classes = useStyles();

  return (
    <BottomNavigation showLabels className={classes.root}>
      <BottomNavigationAction
        onClick={() => toggleAudio(audio, setAudio)}
        label={
          audio.isMuted ? (
            <span style={{ color: "white" }}>Turn on microphone</span>
          ) : (
            <span style={{ color: "white" }}>Turn off microphone</span>
          )
        }
        icon={
          audio.isMuted ? (
            <MicOffIcon color="secondary" />
          ) : (
            <MicIcon style={{ color: "white" }} />
          )
        }
      />
      <BottomNavigationAction
        onClick={() => toggleVideo(video, setVideo)}
        label={
          video.isOn ? (
            <span style={{ color: "white" }}>Turn off camera</span>
          ) : (
            <span style={{ color: "white" }}>Turn on camera</span>
          )
        }
        icon={
          video.isOn ? (
            <VideocamIcon style={{ color: "white" }} />
          ) : (
            <VideocamOffIcon color="secondary" />
          )
        }
      />
      <BottomNavigationAction
        onClick={() =>
          shareScreen(
            video,
            userStream,
            peersRef,
            screenShare,
            setScreenShare,
            screenTrackRef
          )
        }
        label={
          screenShare ? (
            <span style={{ color: "white" }}>Stop presenting</span>
          ) : (
            <span style={{ color: "white" }}>Present now</span>
          )
        }
        icon={
          screenShare ? (
            <StopScreenShareIcon color="secondary" />
          ) : (
            <ScreenShareIcon style={{ color: "white" }} />
          )
        }
      />
      <BottomNavigationAction
        onClick={() => leaveRoom()}
        label={<span style={{ color: "white" }}>Leave call</span>}
        icon={<CallEndIcon color="secondary" />}
      />
    </BottomNavigation>
  );
};

function clone(obj) {
  if (null == obj || "object" != typeof obj) return obj;
  let copy = obj.constructor();
  for (let attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}

function toggleAudio(audio, setAudio) {
  if (audio && audio.audioTracks) {
    audio.audioTracks.forEach((track) => (track.enabled = !track.enabled));
    audio.isMuted = !audio.isMuted;
    const newAudio = clone(audio);
    setAudio(newAudio);
  }
}

function toggleVideo(video, setVideo) {
  if (video && video.videoTracks) {
    video.videoTracks.forEach((track) => (track.enabled = !track.enabled));
    video.isOn = !video.isOn;
    const newVideo = clone(video);
    setVideo(newVideo);
  }
}

async function shareScreen(
  video,
  userStream,
  peersRef,
  screenShare,
  setScreenShare,
  screenTrackRef
) {
  try {
    console.log(screenTrackRef.current);
    if (!screenShare) {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        cursor: true,
      });
      screenTrackRef.current = stream.getTracks()[0];
      peersRef.current.forEach((p) => {
        p.peer.replaceTrack(
          video.videoTracks[0],
          screenTrackRef.current,
          userStream.current
        );
      });
      setScreenShare(true);
      screenTrackRef.current.onended = () => {
        peersRef.current.forEach((p) => {
          p.peer.replaceTrack(
            screenTrackRef.current,
            video.videoTracks[0],
            userStream.current
          );
        });
      };
    } else if (screenTrackRef.current) {
      console.log("RAN");
      screenTrackRef.current.stop();
      setScreenShare(false);
    }
  } catch (e) {
    console.log(e);
  }
}

export default Menubar;
