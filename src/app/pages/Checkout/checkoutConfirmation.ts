import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ProductsService } from '../../services/product.service';
import { CommonServices } from '../../services/common.services';
import { LoginService } from '../../services/login.service';

@Component({
  templateUrl: './checkoutConfirmation.html'
})
export class checkoutConfirmation implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute,
      private CommonServices: CommonServices,
      private ProductsService: ProductsService,
      private LoginService: LoginService,
      private router: Router,
      private http: Http,
  ) { }

  orderConfirmationId = "";

    ngOnInit() {
        if(sessionStorage.getItem('currentUserID') === null && sessionStorage.getItem('currentUsername') === null){
            this.router.navigate(['../loginPage']);
        }
        this.activatedRoute.params.subscribe((params: Params) => {
            this.orderConfirmationId = params['id'];
        });

        for (let cartEmpty of this.CommonServices.addedToCartProduct) {
            this.CommonServices.addedToCartProduct = [];
            this.CommonServices.addedToCartProduct.splice(this.CommonServices.addedToCartProduct.indexOf(cartEmpty), 0);
            sessionStorage.removeItem(cartEmpty.ID);
            sessionStorage.removeItem("Qty"+cartEmpty.ID);
        } 
    }

}
