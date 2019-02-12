import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {API_URLS} from '../config/api.url.config';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../shared/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private httpClient: HttpClient) { }
  getProduits(): Observable<any> {
      return this.httpClient.get(API_URLS.PRODUITS_URL);
  }
  addProduit(p: Produit): Observable<any> {
    return this.httpClient.post(API_URLS.PRODUITS_URL, p);

  }
  updateProduit(p: Produit): Observable<any> {
    return this.httpClient.put(API_URLS.PRODUITS_URL, p);
  }
  deleteProduit(id): Observable<any>  {
    return this.httpClient.delete(API_URLS.PRODUITS_URL + '/' + id);
  }
}
