import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { CommonServices } from '../../services/common.services';
import { CheckoutStep } from './checkout.step';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-checkoutShippingAddress',
  templateUrl: './checkoutShippingAddress.html'
})
export class checkoutShippingAddress implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute,
      private CommonServices: CommonServices,
      private CheckoutStep: CheckoutStep,
      private LoginService: LoginService
  ) { }

  shippingAddressModal = false;
  
  ngOnInit() {
    //this.CommonServices.checkoutShipping[0].firstName
    //LoginService.myAccount[0].addressBook[0].lastName
    
  }

  checkoutAddShipping(){
    this.shippingAddressModal = true;
  }

  shippingModalClose(){
    this.shippingAddressModal = false;
  }
  
  checkoutShippingForm(formData: NgForm){
    for (let index in this.LoginService.myAccountAddressBook){
      if(formData.value.shippingAddress === index){
        //console.log(this.LoginService.myAccountAddressBook[index]);
        this.CheckoutStep.checkoutShippingFunc(this.LoginService.myAccountAddressBook[index]);
      }
    }
  }
}
