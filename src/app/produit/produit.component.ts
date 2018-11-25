import { Component, OnInit } from '@angular/core';
import {Produit} from '../shared/produit';
import {ProduitService} from './service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[];
  produit = new Produit();
  constructor(private produitService: ProduitService, private fb: FormBuilder) {

  }

  ngOnInit() {

    this.produit = null;
    this.produits = this.produitService.getProduit();
  }
  addProduit(f) {
   console.log(f);
   this.produitService.addProduit(f);
   this.ngOnInit();
  }
  edit(id) {

  }
  delete(id) {

  }
  goBack() {
    this.ngOnInit();
  }

}
