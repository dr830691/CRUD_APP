import { Mongoose,mongo } from "mongoose";
const userSchema =Mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone:Number

});
const user_model=Mongoose.model('user',userSchema);
export default user_model;