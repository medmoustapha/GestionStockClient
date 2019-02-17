import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProduitService} from './service.service';
import {Injectable} from '@angular/core';


export  class  ProduitResolver implements Resolve<any>{
  constructor(private produitservice: ProduitService){}
  resolve(){
    return this.produitservice.getProduit();
  }


}
