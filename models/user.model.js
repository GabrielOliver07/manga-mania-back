// models/User.model.js

const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    // aqui vão as propriedades
    username: {
        type: String,
        trim: true,
        required: [true, 'campo username é obrigatório!'],
        unique: true,
    },

    email: {
        type: String,
        required: [true, 'campo email é obrigatório!'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'insira formato de email válido.']
    },

    password: {
        type: String,
        required: [true, 'campo passwordHash é obrigatório'],
    },

    profileImageUrl:{
       type: String
    } 

}, { timestamps: true });

module.exports = model('User', userSchema);