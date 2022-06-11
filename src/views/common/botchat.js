import React, { Component, useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import styles from "./style/estiloschat.css";
import accesoChat from "Observatorio/img/accesoChat.png";
import chatmobil from "Observatorio/img/ChatMobile.png";
import {Tooltip, useMediaQuery,makeStyles,
  Fab,} from "@material-ui/core";
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
  botchat3:{
    position: "fixed",
    top: "88%",
    left: "75.5%",      
    cursor:"pointer",
}, 
  unico:{
    boxShadow: "1px -1px 0px -1px rgb(0 0 0 / 0%), 0px 6px 10px 0px rgb(0 0 0 / 0%), 0px 1px 18px 0px rgb(0 0 0 / 0%) !important",
    backgroundColor: "#e0e0e000 !important"
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
  chatactive2:{
    display:"block !important",
    position: "fixed",
    top: "25%",
    left: "25%",
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
  const matches = useMediaQuery("(min-width:527px)");
  var estilo1 = null
  var estilo2 = null
  var imagen = null
  if(matches){
    estilo1=classes.botchat2
    imagen= accesoChat
    estilo2 = classes.chatactive
  }else{
    estilo1=classes.botchat3
    imagen=chatmobil
    estilo2 = classes.chatactive2
  }
    return (
      <div>  
        <div id="chat" className={estilo}>
          <div className={estilo2}>
          <Chatbot config={Config} messageParser={MessageParser} placeholderText='Escribe tu mensaje aquí' actionProvider={ActionProvider}/> 
          </div>  
        </div>
        <div className={estilo1}>
          <Tooltip title="Chat" arrow>
          <Fab className={classes.unico}> 
            {/* <HeadsetMicIcon fontSize="large"/>             */}
            <img className={classes.imagen_chat} src={imagen} onClick={estadochat}/>
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