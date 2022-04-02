const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');
const auth = require('../middlewares/auth');

// Créer un nouveau commentaire OK
router.post('/createComment/', auth, commentCtrl.createComment);

// Récupérer tous les commentaires d'un article OK
router.get('/comments/article/:articleId', commentCtrl.findAllComments);

// Récupérer un comment par son id (modification) OK
router.get('/comment/:commentId', auth, commentCtrl.findCommentById);

// Mettre a jour un comment OK
router.put('/comment/update/:commentId', auth, commentCtrl.updateComment);

// Effacer un comment OK
router.delete('/comment/delete/:commentId', auth, commentCtrl.deleteOneComment);

module.exports = router;