import {Schema, model} from 'mongoose'

const Users = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, unique: true, required: true},
    roles: [{type: String, ref: 'Role'}]
})

export default model('Users', Users)