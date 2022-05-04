import React, { Component, useState, useEffect } from "react";
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
    
    botchat2:{
      position: "fixed",
      top: "85%",
      left: "95%",      
  },
  chatactive:{
    display:"block !important",
    position: "fixed",
        top: "30%",
        left: "83%",
        zIndex: "101",
  },
  chatdisabled:{
    display:"none !important"
  },
})

const BotChat = () => {
  const classes = useStyle();
  const [estadovisible, setestadovisible] = useState(false);
  var estilo = null;
  estadovisible?estilo= classes.chatactive:estilo=classes.chatdisabled;
  
    return (
      <div>  
        <div id="chat" className={estilo}>
          <Chatbot config={Config} messageParser={MessageParser} placeholderText='Escribe tu mensaje aquí' actionProvider={ActionProvider}/>   
        </div>
        <div className={classes.botchat2}>
          <Fab onClick={estadochat} color="primary" aria-label="like">
            <HeadsetMicIcon fontSize="large"/>            
          </Fab>
        </div>
      </div>
    );
    function estadochat() {
      if(estadovisible){
        setestadovisible(false)
      }else{
        setestadovisible(true)
      }
    }
  }

export default BotChat;