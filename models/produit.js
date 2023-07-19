const mongoose = require ('mongoose');
const ProduitSchema = mongoose.Schema({ 
    nom :{
        type: String,
        required: true
    }, 
    prix_unitaire:{
        type: Number,
        required: true
    } ,
    quantite:{
        type: Number,
        required: true
    }

}); 

module.exports = mongoose.model('produit',ProduitSchema)