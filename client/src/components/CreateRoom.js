import React from "react";
import { v1 as uuid } from "uuid"; // to generate random roomId(s)

const CreateRoom = (props) => {
  const create = () => {
    const id = uuid();
    props.history.push(`/room/${id}`); // redirect to a randomly generated room and push to history stack
  };

  return <button onClick={create}>Create room</button>;
};

export default CreateRoom;
