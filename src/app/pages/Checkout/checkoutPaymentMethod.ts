import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { CommonServices } from '../../services/common.services';
import { CheckoutStep } from './checkout.step';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-checkoutPaymentMethod',
  templateUrl: './checkoutPaymentMethod.html'
})
export class checkoutPaymentMethod implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute,
      private CommonServices: CommonServices,
      private CheckoutStep: CheckoutStep,
      private LoginService: LoginService
  ) { }
  
  ngOnInit() {
    //this.CommonServices.checkoutShipping[0].firstName
  }

  paymentModal = false;

  paymentModalClose(){
    this.paymentModal = false;
  }

  paymentModalOpen(){
    this.paymentModal = true;
  }

  
  checkoutPaymentMethodForm(formData: NgForm){
    //this.CheckoutStep.checkoutPaymentMethodFunc(formData.value.cardName, formData.value.cardNumber, formData.value.cardType, formData.value.monthExpriration, formData.value.yearExpriration, formData.value.cardSecurity);
    for (let index in this.LoginService.myAccountPaymentsInfo){
      if(formData.value.paymentMethod === index){
        this.CheckoutStep.checkoutPaymentMethodFunc(this.LoginService.myAccountPaymentsInfo[index]);
      }
    }
  }
}
