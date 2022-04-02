// Création d'un article OK
router.post('/createArticle/', auth, articleCtrl.createArticle);

// Suppression d'un article OK
router.delete('/article/delete/:articleId', auth, articleCtrl.deleteArticle);

// Modification d'un article OK
router.put('/article/update/:articleId', auth, articleCtrl.modifyArticle);

// Récupérer TOUS les articles OK
router.get('/articles/', articleCtrl.getArticles);

// Récupérer tous les articles par date de création
router.get('/articles/createdAt/', auth, articleCtrl.getArticlesByCreatedDate);

// Récupérer tous les articles par date de mise a jour
router.get('/articles/updatedAt/', auth, articleCtrl.getArticlesByUpdatedDate);

// Récupérer un article par son id OK
router.get('/article/:id', auth, articleCtrl.getOneArticle);

// Récupérer TOUS les articles d'UN utilisateur OK
router.get('/articles/user/:user_id', auth, articleCtrl.getArticlesOfOneUser);



module.exports = router;