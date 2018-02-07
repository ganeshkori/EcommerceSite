import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { CommonServices } from '../../services/common.services';
import { CheckoutStep } from './checkout.step';

@Component({
  selector: 'app-checkoutShippingOptions',
  templateUrl: './checkoutShippingOptions.html'
})
export class checkoutShippingOptions implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute,
      private CommonServices: CommonServices,
      private CheckoutStep: CheckoutStep
  ) { }
  
  ngOnInit() {
    //this.CommonServices.checkoutShipping[0].firstName
  }
  
  checkoutShippingOptionsForm(formData: NgForm){
    this.CheckoutStep.checkoutShippingOptionsFunc(formData.value.shippingOptions);
  }
}
