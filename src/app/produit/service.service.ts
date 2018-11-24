import { Injectable } from '@angular/core';
import {Produit} from '../shared/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
   produits: Produit[] = [];

  constructor() {
    const p1 = new  Produit('livre1', 20, 1000);
    const p2 = new  Produit('livre1', 20, 1000);
    const p3 = new  Produit('livre1', 20, 1000);
    this.produits.push(p1);
    this.produits.push(p2);
    this.produits.push(p3);
  }
  getProduit(): Produit[] {
    return this.produits;

  }
}
