// models/User.model.js

const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    // aqui vão as propriedades
    comment: {
        type: String,
        trim: true,
        required: [true, 'campo comment é obrigatório!'],
        unique: true,
    },

    userId: {
        type: String,
        trim: true,
        required: [true, 'campo username é obrigatório!'],
        unique: true,
    },

    mangaId:{

    required: [true, 'campo username é obrigatório!'],    
    }


    

}, { timestamps: true });

module.exports = model('Comment', commentSchema);