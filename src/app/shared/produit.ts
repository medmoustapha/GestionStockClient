import {ProduitService} from '../produit/service.service';
import {FormBuilder} from '@angular/forms';

export   class Produit {
  id: number;
  ref: string;
  quantite: number;
  prixUnitaire: number;
}
