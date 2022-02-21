//what type of datas we are requiring from a user


const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userRegSchema = mongoose.Schema(
{
    name: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    password: {
        type: 'string',
        required: true,

    },
    pic: {
        type: 'string',
        required: true,
        default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
    },

},
{
    timestams: true,
}
);

const User = mongoose.model('User',userRegSchema);

module.exports = User;