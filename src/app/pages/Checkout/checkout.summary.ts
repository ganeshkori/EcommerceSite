import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, Input, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ProductsService } from '../../services/product.service';
import { CommonServices } from '../../services/common.services';

@Component({
  selector: 'app-checkoutSummary',
  templateUrl: './checkout.summary.html'
})


export class checkoutSummary {

    constructor(
        private activatedRoute: ActivatedRoute,
        private http: Http,
        private ProductsService: ProductsService,
        private CommonServices: CommonServices
    ) { }

    productList = [];

    ngOnInit() {

        for (let entry of this.ProductsService.productList) {
            if(entry.ID===sessionStorage.getItem(entry.ID)){
                this.productList.push(entry);
            }
        }

    }
    
}
