const Produit = require("../models/produit")

exports.ajouterproduit = async (req, res) =>{
  try{ 
    let produit ; 
    produit= new Produit(req.body);
    
   await produit.save (); 
   res.send(produit);


  } catch(error) {
   console.log(error); 
   res.status(500).send(' il ya un erreur')
  } 

} 
exports.getProduit = async (req,res) =>{
   try{

      const produit = await Produit.find();
      res.json(produit )

   }catch(error){
      console.log(error);
      res.status(500).send('il y a un erreur');
   }
} 
exports.modiferProduit = async(req, res) => {
   try{
       
      const{ nom, prix_unitaire, quantite} = req.body;
      let produit = await Produit.findById(req.params.id);
      if(!produit ){
       res.status(404).json({msg:'pas de produit !'})
      } 

      produit.nom= nom ;
      produit.prix_unitaire= prix_unitaire ;
      produit.quantite= quantite ;

      produit = await Produit.findOneAndUpdate({ _id:req.params.id },produit, {new: true}) 
      res.json(produit);


   }catch(error){
      console.log(error);
      res.status(500).send("erreur de modification");
   }
} 
 
exports.obtenirProduit = async (req, res) => {
   try{

      const produit = await Produit.findById(req.params.id);
      res.json(produit )

   }catch(error){
      console.log(error);
      res.status(500).send('il y a un erreur');
   }
}
 
exports.supprimerProduit = async (req, res) => {
   try { 
      const result = await Produit.deleteOne({ _id: req.params.id });

      if (result.deletedCount === 0) {
         return res.status(404).json({ msg: 'Pas de produit trouvé !' });
      }

      res.json({ msg: 'Supprimé avec succès !' });
   } catch (error) {
      console.log(error);
      res.status(500).send('Il y a une erreur');
   }


};

