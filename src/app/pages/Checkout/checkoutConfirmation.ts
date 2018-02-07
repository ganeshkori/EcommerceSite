import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ProductsService } from '../../services/product.service';
import { CommonServices } from '../../services/common.services';

@Component({
  templateUrl: './checkoutConfirmation.html'
})
export class checkoutConfirmation implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute,
      private CommonServices: CommonServices,
      private ProductsService: ProductsService,
      private http: Http,
  ) { }

    ngOnInit() {

        for (let entry of this.ProductsService.productList) {
            if(entry.ID===sessionStorage.getItem(entry.ID)){
                //this.CommonServices.addedToCartProduct = [];
                //sessionStorage.removeItem(entry.ID);
            }
             
        }

    }

}
