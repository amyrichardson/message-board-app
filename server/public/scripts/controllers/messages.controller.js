myApp.controller('MessagesController', ['MessageService', function(MessageService) {
    console.log('MessagesController loaded');
    
    const self = this;
    self.messages = MessageService.messages;

    self.addMessage = function(message) {
        //post message to server
        console.log('adding message', message);
        MessageService.addMessage(message);
    } //end addMessage

}]);