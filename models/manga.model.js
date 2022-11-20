// models/manga.model.js

const { Schema, model } = require('mongoose');

const mangaSchema = new Schema({
    // aqui vão as propriedades
    

    name: {
        type: String,
        trim: true,
        required: [true, 'campo name é obrigatório!'],
        unique: true,
    },

    description: {
        type: String,
        trim: true,
        required: [true, 'campo mangadescription é obrigatório!'],
        unique: true,
    },

    publicationyear: {
        type: String,
        trim: true,
        required: [true, 'campo publicationyear é obrigatório!'],
        unique: true,
    },

    status: {
        type: String,
        trim: true,
        required: [true, 'campo status é obrigatório(ex:completo, publicando, em hiato)!'],
        unique: true,
    },
   
    author: {
        type: String,
        trim: true,
        required: [true, 'campo author é obrigatório!'],
        unique: true,
    },

    numberofchapters: {
        type: String,
        trim: true,
        required: [true, 'campo numberofchapters é obrigatório!'],
        unique: true,
    },

    profileImageUrl:{
        type: String,
        required: [true, 'campo profileImageUrl é obrigatório!'],
    } 


}, { timestamps: true });

module.exports = model('Mangá', mangaSchema);