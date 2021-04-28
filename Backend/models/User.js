const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('user', UserSchema);