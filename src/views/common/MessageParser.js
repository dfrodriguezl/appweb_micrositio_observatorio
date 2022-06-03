class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {

       const lowercase = message.toLowerCase()
       console.log(this.state)

       if(lowercase.includes("hola")){
         this.actionProvider.helloworldHandler()
       }
    }
  }
  
  export default MessageParser;