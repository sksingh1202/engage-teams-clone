import { useState, useEffect, useRef } from "react";

import axios from "axios";
import { ChatEngine } from "react-chat-engine";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Chat = (props) => {
  const [allSet, setAllSet] = useState(false);
  const chatEngRef = useRef();
  const classes = useStyles();

  
  useEffect(() => {
    const setKeys = async () => {
      try {
        const config = {
          method: "post",
          url: "/fetch_keys",
        };
        const response = await axios(config);
        chatEngRef.current = {};
        chatEngRef.current["projectID"] = response.data.projectID;
        chatEngRef.current["userName"] = props.location.state.username;
        chatEngRef.current["userSecret"] = response.data.userSecret;
        if (
          chatEngRef.current["projectID"] &&
          chatEngRef.current["userName"] &&
          chatEngRef.current["userSecret"]
        )
          setAllSet(true);
        // console.log(allSet);
      } catch (error) {
        console.log(error);
        props.history.push(`/`);
      }
    };
    setKeys();
  }, [allSet, props.history, props.location.state.username]);

  return (
    <>
      {allSet ? (
        <ChatEngine
          height="100vh"
          projectID={chatEngRef.current["projectID"]}
          userName={chatEngRef.current["userName"]}
          userSecret={chatEngRef.current["userSecret"]}
        />
      ) : (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default Chat;
