import { Component, OnInit } from '@angular/core';
import {Produit} from '../shared/produit';
import {ProduitService} from './service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[];
  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.produits = this.produitService.getProduit();
  }

}
