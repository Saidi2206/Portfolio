import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { produit } from 'src/app/models/produit'; 
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  produitForm: FormGroup; 
  titre = 'Ajouter produit';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private toastr: ToastrService, 
    private _ProduitService: ProduitService, 
    private aRouter: ActivatedRoute
  ) { 
     // Initialisation du formulaire de produit
    this.produitForm = this.fb.group({
      nom: ['', Validators.required],
      prix_unitaire: ['', Validators.required],
      quantite: ['', Validators.required],
    });  
     // Récupération de l'identifiant de produit depuis l'URL
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void { 
    this.modifier(); // Appel de la méthode pour effectuer la modification si l'identifiant existe
  }

  ajouterProduit() {
    const PRODUIT: produit = {
      nom: this.produitForm.get('nom')?.value,
      prix_unitaire: this.produitForm.get('prix_unitaire')?.value,
      quantite: this.produitForm.get('quantite')?.value,
    };
     
    if (this.id !== null) { 
      // Appel du service pour modifier le produit existant
      this._ProduitService.modiferProduit(this.id, PRODUIT).subscribe(
        () => {
          this.toastr.info('Le produit a été modifié avec succès !', 'Produit modifié !');
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          this.produitForm.reset();
        }
      );
    } else { 
       // Appel du service pour ajouter un nouveau produit
      this._ProduitService.sauvegarderproduit(PRODUIT).subscribe(
        () => {
          this.toastr.success('Le produit a été enregistré avec succès !', 'Produit enregistré !');
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          this.produitForm.reset();
        }
      );
    }
  } 

  modifier() {
    if (this.id !== null) {
      this.titre = 'Modifer produit'; 
      // Appel du service pour récupérer les données du produit à modifier
      this._ProduitService.obtenirProduit(this.id).subscribe(
        data => {
          this.produitForm.setValue({    
             // Remplissage du formulaire avec les données du produit
            nom: data.nom,
            prix_unitaire: data.prix_unitaire,
            quantite: data.quantite,
          });
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  
}
