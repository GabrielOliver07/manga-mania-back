// importar mongoose
const mongoose = require('mongoose');

// importar roteador
const router = require('express').Router();

// modelos
const Comment = require('../models/comment.model');

router.post('/', async function (req, res, next) {
    const {
        comment,
        mangaId
    } = req.body;
    const userId = req.payload._id
    try {
        const commentFromDB = await Comment.create({
            comment,
            userId,
            mangaId

        });
        res.status(200).json(commentFromDB);
    } catch (error) {
        next(error);
    }

})

// todos os comentarios de um manga especifico
router.get('/:mangaId', async (req, res, next) => {
    const { mangaId } = req.params;
    try {
        // valida se o projectId é um id que o mongo reconhece
        if (!mongoose.Types.ObjectId.isValid(mangaId)) {
            // return res.status(400).json({ message: 'Specified ID is not valid.'});
            const error = new Error('Specified ID is not valid.');
            error.status = 400;
            // caso id não seja valido, jogamos um erro que vai para o catch
            throw error;
        }
        const mangaFromDB = await Comment.find({ mangaId });
        res.status(200).json(mangaFromDB);
    } catch (error) {
        next(error);
    }
});

// edita um comentario específico
router.put('/:commentId', async (req, res, next) => {
    const { commentId } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(commentId)) {
            const error = new Error('Specified ID is not valid.');
            error.status = 400;
            throw error;
        }
        const commentFromDB = await Comment.findByIdAndUpdate(commentId, req.body, { new: true });
        res.status(200).json(commentFromDB);
    } catch (error) {
        next(error);
    }
})

// remove um comentario específico
router.delete('/:commentId', async (req, res, next) => {
    const { commentId } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(commentId)) {
            const error = new Error('Specified ID is not valid.');
            error.status = 400;
            throw error;
        }
        const commentFromDB = await Comment.findByIdAndRemove(commentId);
        res.status(204).json();
    } catch (error) {
        next(error);
    }
})


module.exports = router
