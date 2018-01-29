myApp.service('MessageService', ['$http', function($http){
    console.log('MessageService loaded');
    
    const self = this;
    self.messages = { list: [] }

    //post message to server
    self.addMessage = function(message) {
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
                self.messages.list = response.data;
                console.log('message list: ', self.messages.list);
                
            })
            .catch(function(response){
                console.log('error getting messages: ', response);   
            })
    } //end getMessages

    //on load
    self.getMessages();

}]);