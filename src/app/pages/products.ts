import { Component, Input, Injectable, Output, EventEmitter, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { Http, Response } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import { ProductsService } from '../services/product.service';

import { CommonServices } from '../services/common.services';


@Injectable()

@Component({
  selector: 'app-body',
  templateUrl: './products.html'
})


export class products implements OnInit {

    constructor(
        private http: Http,
        private _router: Router,
        private ProductsService: ProductsService,
        private CommonServices: CommonServices
    ){}
   
    productList = [];

    addToCart(event){
        //this.CommonServices.AddToCartFunction(event,1);
    }

  ngOnInit(): void {
    // this.http.get('./assets/data/product.json')
    // .map(response => response.json()).subscribe(data => {
    //     this.productList = data;
    // },
    // err => {
    //     console.log("Error occured. --Product Listing(products.ts)--")
    // });

    //this.productList = this.ProductsService.productList;
  }
   
}
