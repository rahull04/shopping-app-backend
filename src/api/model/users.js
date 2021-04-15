const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  email:  String, // String is shorthand for {type: String}
  username: String,
  password:   String,
});

module.exports = UserSchema;
//export default mongoose.models.users || mongoose.model('users',UserSchema)