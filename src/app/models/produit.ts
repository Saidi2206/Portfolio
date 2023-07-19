export class produit{
    _id?: number;// Identifiant du produit  
    nom : string;// Nom du produit
    prix_unitaire: number;// Prix unitaire du produit
    quantite: number;// Quantité du produit

    constructor(nom: string,  prix_unitaire: number,  quantite: number ){
        this.nom = nom;
        this.prix_unitaire = prix_unitaire;
        this.quantite = quantite;
    
    }
}