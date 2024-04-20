const mongoose = requiree('mongoose');

const UserSchema = mongoose.schema(
    
    
    {

        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true // this password should be encrypted before entering database
        },
        email: {
            type: String,
            required: true,
            unique: true // emails are not allowed to be reused
        }




    }
)

const Users = mongoose.model("userEntity", UserSchema);

module.exports = Users;