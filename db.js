let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/loveWall', { useNewUrlParser: true });

let loveWallSchema = new mongoose.Schema({
    name: String,
    kind: String,
    content: String,

    username:String,
    tel:Number,
    huntNum:String,
})

module.exports = mongoose.model('loveWall', loveWallSchema);