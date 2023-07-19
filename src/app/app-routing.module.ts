import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AfficherComponent  } from './components/afficher/afficher.component';
import { AjouterComponent } from './components/ajouter/ajouter.component';

const routes: Routes = [ 
  {path:'',component:AfficherComponent },// Route pour afficher les produits
  {path:'Ajouter_produit',component:AjouterComponent},// Route pour ajouter un produit
  {path:'modifier_produit/:id',component:AjouterComponent}, // Route pour modifier un produit avec un ID spécifique
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirection par défaut vers la page d'affichage des produits
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
