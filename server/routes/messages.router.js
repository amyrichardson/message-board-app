const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define Schema
let messageSchema = new mongoose.Schema(
    {
        user: { type: String, required: true },
        text: { type: String, required: true }
    }
)

// Model
let Message = mongoose.model('Message', messageSchema);

// Routes
//POST
router.post('/', (req, res) => {
    console.log('data to save:', req.body);
    
    // create an instance of our model, as an a mongoose object
    let messageToAdd = new Message(req.body);

    // create a new document in our database and collection
    messageToAdd.save((error, savedMessage) => {
        if(error) {
            console.log('error on save:', error);
            res.sendStatus(500);
        } else {
            console.log('new message document', savedMessage);
            res.sendStatus(201);
        }
    });
});
//GET


module.exports = router;