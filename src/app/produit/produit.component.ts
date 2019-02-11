import { Component, OnInit } from '@angular/core';
import {Produit} from '../shared/produit';
import {ProduitService} from './service.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[];
  produitForm: FormGroup;
  constructor(private produitService: ProduitService, priavte fb: FormBuilder) { }

  ngOnInit() {
    this.produits = this.produitService.getProduit();
  }

}
