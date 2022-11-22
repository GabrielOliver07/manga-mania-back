// importar mongoose
const mongoose = require('mongoose');

// importar roteador
const router = require('express').Router();

// modelos
const Manga = require('../models/manga.model');

router.post('/', async function (req, res, next) {
    const {
        name,
        description,
        publicationYear,
        status,
        category,
        author,
        numberOfChapters,
        coverImageUrl
    } = req.body;
    try {
        const mangaFromDB = await Manga.create({
            name,
            description,
            publicationYear,
            status,
            category,
            author,
            numberOfChapters,
            coverImageUrl
        });
        res.status(200).json(mangaFromDB);
    }catch(error) {
        next(error);
    }
    
})
// retorna todos os projetos
router.get('/', async (req, res, next) => {
    try {
      const mangasFromDB = await Manga.find();
      res.status(200).json(mangasFromDB);
    } catch (error) {    
      next(error);
    }
  })
  // retorna um projeto específico
router.get('/:mangaId', async (req, res, next) => {
    const { mangaId } = req.params;
    try {
      // valida se o mangaId é um id que o mongo reconhece
      if (!mongoose.Types.ObjectId.isValid(mangaId)) {
        // return res.status(400).json({ message: 'Specified ID is not valid.'});
        const error = new Error('Specified ID is not valid.');
        error.status = 400;
        // caso id não seja valido, jogamos um erro que vai para o catch
        throw error; 
      }
    //   const mangaFromDB = await Manga.findById(mangaId).populate('tasks');
      res.status(200).json();
    } catch (error) {    
      next(error);
    }
  });










module.exports = router
