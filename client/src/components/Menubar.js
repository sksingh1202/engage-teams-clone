import React from "react";

const Menubar = ({ audio, video, leaveRoom }) => {
  return (
    <div>
      <button onClick={() => toggleAudio(audio)}>Mute</button>
      <button onClick={() => toggleVideo(video)}>Video</button>
      <button onClick={() => leaveRoom()}>Leave</button>
    </div>
  );
};

function toggleAudio(audio) {
  if (audio && audio.audioTracks) {
    audio.audioTracks.forEach((track) => (track.enabled = !track.enabled));
  }
}

function toggleVideo(video) {
  if (video && video.videoTracks) {
    video.videoTracks.forEach((track) => (track.enabled = !track.enabled));
  }
}

export default Menubar;