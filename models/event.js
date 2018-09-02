var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    eventName: {type: String, require: true},
    eventOrganiser: {type: String, require: true},
    eventTime: {type: String, require: true},
    eventLocation: {type: String, require: true}
})

module.exports= mongoose.model('Event', schema);