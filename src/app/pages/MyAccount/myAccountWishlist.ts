import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../../services/product.service';
import { CommonServices } from '../../services/common.services';
import { LoginService } from '../../services/login.service';


@Component({
  templateUrl: './myAccountWishlist.html'
})
export class myAccountWishlist implements OnInit {

  constructor(
      private router: Router,
      private CommonServices: CommonServices,
      private LoginService: LoginService,
      private ProductsService: ProductsService
  ) { }


  ngOnInit() {
    if(sessionStorage.getItem('currentUserID') === null && sessionStorage.getItem('currentUsername') === null){
      this.router.navigate(['../loginPage']);
    }
  }

  removeWishlist(event){
    this.LoginService.myAccountWishlistProduct.splice(this.LoginService.myAccountWishlistProduct.indexOf(event), 1);
    this.LoginService.myAccountWishlistProductPut('Delete');
  }

}
