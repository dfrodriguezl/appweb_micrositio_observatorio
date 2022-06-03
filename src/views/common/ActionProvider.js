class ActionProvider {
    constructor(createChatBotMessage,setStateFunc) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
   }

   helloworldHandler = () => {
     const message = this.createChatBotMessage("Hola tu")
     this.setChatbotMessage(message)
   }

   setChatbotMessage = (message) => {
      this.setState(state => ({ ...state, messages:[...state.messages, message]}))
   }
 }
 
 export default ActionProvider;