import React from "react";
import Chatbot from "react-chatbot-kit";
import {
    Grid,
    makeStyles,
    useMediaQuery,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Modal,
    Box,
    TextField,
    Fab,
  } from "@material-ui/core";

//import config from "./configs/chatbotConfig";
//import MessageParser from "./chatbot/MessageParser";
//import ActionProvider from "./chatbot/ActionProvider";
const useStyle = makeStyles({
    botchat:{
        position: "fixed",
        top: "85%",
        left: "93%",
    }
})
const Chat = () => {
const classes = useStyle();
  return (
    <div className={classes.botchat}>
        <Fab color="primary" aria-label="add">
            {/* <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            /> */}
      </Fab>      
    </div>
  );
}

export default Chat;