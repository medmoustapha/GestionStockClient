import { Component, OnInit } from '@angular/core';
import {Produit} from '../shared/produit';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProduitService} from './produit.service.service';



@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[];
  operation= '';
  produit = new Produit();
  produitForm: FormGroup;

  constructor(private produitService: ProduitService, private fb: FormBuilder) {
   this.creatForm();
  }
  creatForm() {
    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''

    });
  }

  initProduit() {

    this.produit = new Produit();
    this.creatForm();
  }
  ngOnInit() {
    this.initProduit();
    this.looadProduit();
  }
  looadProduit() {
    this.produitService.getProduits().subscribe(data => {
      this.produits = data;
    },
      error1 => { console.log('An error was occured'); });
  }
  addProduit() {
    const  p = this.produitForm.value;
    this.produitService.addProduit(p).subscribe(data => {
      this.initProduit();
      this.looadProduit();
      this.operation = '';
    });

  }

  edit() {
    const  p = this.produitForm.value;
    this.produitService.updateProduit(this.produit).subscribe(data => {
      this.operation = '';
      this.initProduit();
    });
  }

  delete(id) {
     this.produitService.deleteProduit(id).subscribe(data => {
         console.log('Produit supprimemr');
         this.looadProduit();
       },
       error1 => { console.log('Produit non supprimemr'); });

  }
  goBack() {
    this.operation = '';

  }


}
