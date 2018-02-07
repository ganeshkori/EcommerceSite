import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { CommonServices } from '../../services/common.services';
import { CheckoutStep } from './checkout.step';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-checkoutBillingAddress',
  templateUrl: './checkoutBillingAddress.html'
})
export class checkoutBillingAddress implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute,
      private CommonServices: CommonServices,
      private CheckoutStep: CheckoutStep,
      private LoginService: LoginService
  ) { }

  billingAddressModal = false;

  ngOnInit() {
    
  }

  checkoutAddBilling(){
    this.billingAddressModal = true;
  }

  billingModalClose(){
    this.billingAddressModal = false;
  }
  
  checkoutBillingForm(formData: NgForm){
    for (let index in this.LoginService.myAccountAddressBook){
      if(formData.value.billingAddress === index){
        this.CheckoutStep.checkoutBillingFunc(this.LoginService.myAccountAddressBook[index]);
      }
    }
  }
}
