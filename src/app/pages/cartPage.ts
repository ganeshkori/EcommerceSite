import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, Input, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { ProductsService } from '../services/product.service';
import { CommonServices } from '../services/common.services';



@Injectable()

@Component({
  templateUrl: './cartPage.html'
})


export class cartPageComponent {

    constructor(
        private activatedRoute: ActivatedRoute,
        private http: Http,
        private ProductsService: ProductsService,
        private CommonServices: CommonServices
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
           //console.log("cartPageComponent");
        });

        this.http.get('../assets/data/product.json')
        .map(response => response.json()).subscribe(data => {
            for (let entry of data) {
                if(entry.ID===sessionStorage.getItem(entry.ID)){
                  //this.productList.push(entry);
                }
            }
        },
        err => {
            console.log("Error occured. --Product Details (pproductDetails.ts)--");
        });

    }

    addToCartRemove(event){
        sessionStorage.removeItem(event.ID); 
        this.CommonServices.addedToCartProduct.splice(this.CommonServices.addedToCartProduct.indexOf(event), 1);
    }   
    
}
