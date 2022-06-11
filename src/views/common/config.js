import {createChatBotMessage} from "react-chatbot-kit";
import React, { Component, useState, useEffect } from "react";
import Todos from "./Todos";
const botName = "Bienvenido!, elige de las siguientes opciones la que mas se parezca a tu consulta y te direccionaremos"

const config = {
    botName: botName,
    initialMessages:[createChatBotMessage(`${botName}`,{
      widget:'todos'
    })],
    customComponents: {
        // Replaces the default header
       header: () => <div style={{ backgroundColor: '#821a3f', padding: "10px", borderRadius: "2px", color:"white" }}>Soy tu asistente del OIN</div>
           
     },
     state:{
      //movieTitles:["ey"]
      todos:[]
    },

    widgets:[
      {
        widgetName: "todos",
        widgetFunc: (props) => <Todos {...props} />,
        mapStateToProps: ["todos"],
        props: {} 
      },
    ]
}

export default config
