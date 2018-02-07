import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CommonServices } from '../../services/common.services';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-payment',
  templateUrl: 'payment.modal.html'
})
export class addPaymentComponent implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute,
      private CommonServices: CommonServices,
      private LoginService: LoginService
  ) { }

  ngOnInit() {
  
  }
    addPaymentData = [
        {
            "cardName": "",
            "cardNumber": "", 
            "cardType": "", 
            "monthExpriration": "", 
            "yearExpriration": "", 
            "cardSecurity": ""
        }
    ];
  addAddressForm(formData: NgForm){
    this.addPaymentData[0].cardName = formData.value.cardName;
    this.addPaymentData[0].cardNumber = formData.value.cardNumber;
    this.addPaymentData[0].cardType = formData.value.cardType;
    this.addPaymentData[0].monthExpriration = formData.value.monthExpriration;
    this.addPaymentData[0].yearExpriration = formData.value.yearExpriration;
    this.addPaymentData[0].cardSecurity = formData.value.cardSecurity;
    this.LoginService.myAccountPaymentsInfoPut(this.addPaymentData[0]);
    //this.CheckoutStep.checkoutShippingCheck = true;
  }
}
