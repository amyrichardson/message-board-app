myApp.controller('MessagesController', ['$http', function($http) {
    console.log('MessagesController loaded');
    
    const self = this;

    self.addMessage = function(message) {
        //post message to server
        console.log('adding message', message);
        
    } //end addMessage

}]);