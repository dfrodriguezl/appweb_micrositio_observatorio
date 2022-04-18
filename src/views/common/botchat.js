import React from "react";
import Chatbot from "react-chatbot-kit";
import styles from "./style/estiloschat.css";
import {
    makeStyles,
    Fab,
  } from "@material-ui/core";
  import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

import Config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const useStyle = makeStyles({
    botchat:{
        position: "fixed",
        top: "30%",
        left: "83%",
        display:"none"
    },
    botchat2:{
      position: "fixed",
      top: "85%",
      left: "95%",      
  },
  chatactive:{
    display:"block !important"
  },
})

const Chat = () => {
const classes = useStyle();
  return (
    <div id="chat" className={classes.botchat}>
      <Chatbot config={Config} messageParser={MessageParser} actionProvider={ActionProvider}/>   
    </div>
  );
}

function estadochat() {
  const classes = useStyle();
  const estilo = classes.chatactive
  var element = document.getElementById("chat")
  element.classList.toggle(estilo)
}

const BotChat = () => {
  const classes = useStyle();
    return (
      <div className={classes.botchat2}>  
        <Chat/>
        <Fab onClick={estadochat} color="primary" aria-label="like">
          <HeadsetMicIcon fontSize="large"/>            
        </Fab>
      </div>
    );
  }

export default BotChat;