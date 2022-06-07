import React, { Component, useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import styles from "./style/estiloschat.css";
import accesoChat from "Observatorio/img/accesoChat.png";
import {Tooltip} from "@material-ui/core";

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
      top: "88%",
      left: "91.5%",      
      cursor:"pointer",
  },  
  imagen_chat: {
    width: "17vh",
  },
  chatactive:{
    display:"block !important",
    position: "fixed",
        top: "23%",
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
          <Tooltip title="Chat" arrow>
          <Fab> 
            {/* <HeadsetMicIcon fontSize="large"/>             */}
            <img className={classes.imagen_chat} src={accesoChat} onClick={estadochat}/>
           </Fab>
          </Tooltip>
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