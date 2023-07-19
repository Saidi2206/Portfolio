import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { produit } from '../models/produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  [x: string]: any; 
  url = 'http://localhost:8080/api/produit';
  constructor(private http:HttpClient) { } 

    // Récupérer tous les produits
  getProduit():Observable<any> {
     return this.http.get(this.url);
  }    
    // Supprimer un produit par son ID
  supprimerProduit(id: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }  
    // Sauvegarder un nouveau produit
  sauvegarderproduit(produit: produit): Observable<any> {
    return this.http.post(this.url, produit);
  }
     // Obtenir les détails d'un produit par son ID
  obtenirProduit(id: string): Observable<any> {
    return this.http.get(this.url + '/' + id);  
  } 
    // Modifier un produit par son ID
  modiferProduit(id: string, produit: produit): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.put(url, produit);
  }
  
 
  }



 

