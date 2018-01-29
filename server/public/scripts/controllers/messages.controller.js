myApp.controller('MessagesController', ['$http', function($http) {
    console.log('MessagesController loaded');
    
    const self = this;
    let messages = { list: [] }

    self.addMessage = function(message) {
        //post message to server
        console.log('adding message', message);
        $http.post('/messages', message)
            .then(function(response){
                console.log('message posted', response);
                self.message = {}; //clears input fields once message is successfully added
                self.getMessages();
            })
            .catch(function(response){
                console.log('error posting message: ', response);   
            })
    } //end addMessage

    //get all messages from server
    self.getMessages = function() {
        console.log('getting messages');
        $http.get('/messages')
            .then(function(response){
                console.log('messages: ', response);
                messages.list = response.data;
            })
            .catch(function(response){
                console.log('error getting messages: ', response);   
            })
    }

    //on load
    self.getMessages();

}]);