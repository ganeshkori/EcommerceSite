import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommonServices } from '../../services/common.services';
import { LoginService } from '../../services/login.service';


@Component({
  templateUrl: './checkout.step.html'
})
export class CheckoutStep implements OnInit {

    constructor(
        private http: Http,
        private router: Router,
        private CommonServices: CommonServices,
        private LoginService: LoginService
    ) { }

    ngOnInit() {
        //LoginService.UserSession()
        //if(!this.LoginService.UserSession()){
        if(sessionStorage.getItem('currentUserID') === null && sessionStorage.getItem('currentUsername') === null){
            this.router.navigate(['../loginPage']);
        }
    }

    // Checkout Shipping Start
    checkoutShippingCheck = true;
    checkoutShipping = [
        {
            "firstName": "",
            "lastName": "", 
            "email": "", 
            "address": "", 
            "address2": "", 
            "city": "",
            "state": "",
            "zip": "",
            "country": "",
            "telephone": "",
            "ext": "",
            "option":"Shipping"
        }
    ];
    checkoutShippingFunc(shippingData){
        this.checkoutShipping[0].firstName = shippingData.firstName;
        this.checkoutShipping[0].lastName = shippingData.lastName;
        this.checkoutShipping[0].email = shippingData.email;
        this.checkoutShipping[0].address = shippingData.address;
        this.checkoutShipping[0].address2 = shippingData.address2;
        this.checkoutShipping[0].city = shippingData.city;
        this.checkoutShipping[0].state = shippingData.state;
        this.checkoutShipping[0].zip = shippingData.zip;
        this.checkoutShipping[0].country = shippingData.country;
        this.checkoutShipping[0].telephone = shippingData.telephone;
        this.checkoutShipping[0].ext = shippingData.ext;
        this.checkoutShippingCheck = false;
    }
    // Checkout Shipping End

    // Checkout Billing Start
    checkoutBillingCheck = true;
    checkoutBilling = [
        {
            "firstName": "",
            "lastName": "", 
            "email": "", 
            "address": "", 
            "address2": "", 
            "city": "",
            "state": "",
            "zip": "",
            "country": "",
            "telephone": "",
            "ext": "",
            "option":"Billing"
        }
    ];
    checkoutBillingFunc(billingData){
        this.checkoutBilling[0].firstName = billingData.firstName;
        this.checkoutBilling[0].lastName = billingData.lastName;
        this.checkoutBilling[0].email = billingData.email;
        this.checkoutBilling[0].address = billingData.address;
        this.checkoutBilling[0].address2 = billingData.address2;
        this.checkoutBilling[0].city = billingData.city;
        this.checkoutBilling[0].state = billingData.state;
        this.checkoutBilling[0].zip = billingData.zip;
        this.checkoutBilling[0].country = billingData.country;
        this.checkoutBilling[0].telephone = billingData.telephone;
        this.checkoutBilling[0].ext = billingData.ext;
        this.checkoutBillingCheck = false;
    }
    // Checkout Billing End

    // Checkout Shipping Options Start
    checkoutShippingOptionsCheck = true;
    checkoutShippingOptions = [
        {
            "shippingOptions": ""
        }
    ];
    checkoutShippingOptionsFunc(shippingOptions){
    this.checkoutShippingOptions[0].shippingOptions = shippingOptions;
    this.checkoutShippingOptionsCheck = false;
    }
    // Checkout Shipping Options End

    // Checkout Payment Method Start
    checkoutPaymentMethodCheck = true;
    checkoutPaymentMethod = [
        {
            "cardName": "",
            "cardNumber": "", 
            "cardType": "", 
            "monthExpriration": "", 
            "yearExpriration": "", 
            "cardSecurity": ""
        }
    ];
    checkoutPaymentMethodFunc(paymentData){
        this.checkoutPaymentMethod[0].cardName = paymentData.cardName;
        this.checkoutPaymentMethod[0].cardNumber = paymentData.cardNumber;
        this.checkoutPaymentMethod[0].cardType = paymentData.cardType;
        this.checkoutPaymentMethod[0].monthExpriration = paymentData.monthExpriration;
        this.checkoutPaymentMethod[0].yearExpriration = paymentData.yearExpriration;
        this.checkoutPaymentMethod[0].cardSecurity = paymentData.cardSecurity;
        this.checkoutPaymentMethodCheck = false;
    }
    // Checkout Payment Method End

    orderInfo = [
        {
            "Placed": new Date().toLocaleString(),
            "Total": this.CommonServices.productTotalFunc(0),
            "ShippingHandling": this.CommonServices.shippingHandling(),
            "EstimatedTax": this.CommonServices.taxFunc(this.CommonServices.productTotalFunc(0) + this.CommonServices.shippingHandling()),
            "Email": "Error",
            "Name": "Error"
        }
    ];

    checkoutData = [
        {
            "shippingAddress": this.checkoutShipping,
            "billingAddress": this.checkoutBilling,
            "shippingOptions": this.checkoutShippingOptions,
            "paymentMethod": this.checkoutPaymentMethod,
            "productList": this.CommonServices.addedToCartProduct,
            "orderInfo": this.orderInfo
        }
    ];

    checkoutConfirmation(){
        this.orderInfo[0].Email = this.LoginService.myAccountProfileInfo[0].ProfileInfo.email;
        this.orderInfo[0].Name = this.LoginService.myAccountProfileInfo[0].ProfileInfo.firstName+' '+this.LoginService.myAccountProfileInfo[0].ProfileInfo.lastName;
        this.CommonServices.loading = true;
        this.LoginService.myAccountOrderHistoryPut(this.checkoutData[0]);
        this.router.navigate(['/checkoutConfirmation']);
    }
  
}
