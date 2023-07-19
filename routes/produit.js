const express = require ('express'); 
const router = express.Router();
const produitcontroller = require('../controllers/produitcontroller');


router.post('/', produitcontroller.ajouterproduit);// Route pour ajouter un produit (méthode POST)
router.get('/',produitcontroller.getProduit);// Route pour obtenir tous les produits (méthode GET) 
router.put('/:id',produitcontroller.modiferProduit);// Route pour modifier un produit spécifique (méthode PUT)
router.get('/:id',produitcontroller.obtenirProduit);// Route pour obtenir un produit spécifique par son ID (méthode GET)
router.delete('/:id',produitcontroller.supprimerProduit) ;// Route pour supprimer un produit spécifique (méthode DELETE)


module.exports = router;