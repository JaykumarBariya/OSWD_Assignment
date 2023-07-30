class DomainSpecificChatbot {
    constructor() {
    }
  
    getResponse(message) {
      if (message.toLowerCase().includes('hello')) {
        return 'Hello! How can I assist you?';
      } else if (message.toLowerCase().includes('weather')) {
        return 'The weather is sunny and warm.';
      } else if (message.toLowerCase().includes('help')) {
        return 'Sure, I can help you with that!';
      } else {
        return "I'm sorry, I don't understand. Can you please rephrase?";
      }
    }
}
  
module.exports = DomainSpecificChatbot;
  