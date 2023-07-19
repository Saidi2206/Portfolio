const express =require("express"); 
const conectarDB = require('./config/db'); 
const cors = require("cors");

const app = express(); 

// Connexion à la base de données
conectarDB();  


// Middleware pour autoriser les requêtes CORS
app.use(cors())

// Middleware pour parser les données JSON
app.use(express.json());

// Routage des requêtes liées aux produits vers le fichier de routes correspondant
app.use('/api/produit',require('./routes/produit'));

// Démarrage du serveur
app.listen(8080,() =>{
    console.log('Server is running on port 8080');
})