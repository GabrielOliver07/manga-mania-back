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
    },

    publicationYear: {
        type: String,
        trim: true,
        required: [true, 'campo publicationyear é obrigatório!'],
    },

    status: {
        type: String,
        trim: true,
        required: [true, 'campo status é obrigatório(ex:Shonen,Kodomo,Shoujo e Seinen)!'],
    },

    category:{
        type: String,
        trim: true,
        required: [true, 'campo status é categoria(ex:completo, publicando, em hiato)!'],
    },
   
    author: {
        type: String,
        trim: true,
        required: [true, 'campo author é obrigatório!'],
    },

    numberOfChapters: {
        type: Number,
        required: [true, 'campo numberofchapters é obrigatório!'],
    },

    coverImageUrl:{
        type: String,
        required: [true, 'campo coverImageUrl é obrigatório!'],
    } 


}, { timestamps: true });

module.exports = model('Manga', mangaSchema);