myApp.controller('MessagesController', ['$http', function($http) {
    console.log('MessagesController loaded');
    
    const self = this;

    self.addMessage = function(message) {
        //post message to server
        console.log('adding message', message);
        $http.post('/messages', message)
            .then(function(response){
                console.log('message posted', response);
            })
            .catch(function(response){
                console.log('error posting message: ', response);   
            })
    } //end addMessage

}]);