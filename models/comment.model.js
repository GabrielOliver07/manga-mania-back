// models/User.model.js

const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    // aqui vão as propriedades
    comment: {
        type: String,
        trim: true,
        required: [true, 'campo comment é obrigatório!'],
    },

    userId: {
        type:Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },

    mangaId: {
        type: Schema.Types.ObjectId,
        ref:"Manga",
        required: true,
    },

    

}, { timestamps: true });

module.exports = model('Comment', commentSchema);