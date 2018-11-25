import { Injectable } from '@angular/core';
import {Produit} from '../shared/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
   produits: Produit[] = [];

  constructor() {
    const p1 = new  Produit();
    p1.ref = 'Livre1';
    p1.quantite =  10;
    p1.prixUnit = 1000;
    const p2 = new  Produit();
    p2.ref = 'Livre2';
    p2.quantite =  10;
    p2.prixUnit = 1000;
    const p3 = new  Produit();
    p3.ref = 'Livre3';
    p3.quantite =  10;
    p3.prixUnit = 1000;
    this.produits.push(p1);
    this.produits.push(p2);
    this.produits.push(p3);
  }
  getProduit(): Produit[] {
    return this.produits;

  }
  addProduit(f) {
    this.produits.push(f);
  }
}
