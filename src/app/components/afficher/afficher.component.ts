import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-afficher',
  templateUrl: './Afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {
  listproduit: produit[] = [];
  
  constructor(private _ProduitService: ProduitService, private toastr: ToastrService) { }

     
  ngOnInit(): void {
    this.obtenirProduit();
  }


  obtenirProduit() { 
     // Appel à la méthode getProduit du service ProduitService pour récupérer les produits
    this._ProduitService.getProduit().subscribe (data  => {
      console.log(data);
      this.listproduit = data;
    }, error => {
      console.log(error);
    })
  }

  supprimerProduit(id:any) { 
    // Appel à la méthode supprimerProduit du service ProduitService pour supprimer le produit avec l'id spécifié
    this._ProduitService.supprimerProduit(id).subscribe(data =>{
      this.toastr.error('Le produit a été supprimé', 'Suppression réussie');
      this.obtenirProduit();// Mise à jour de la liste des produits après suppression
    },error =>{
      console.log("erreur");
    });
    
  }

}