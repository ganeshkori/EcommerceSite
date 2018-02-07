import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CommonServices } from '../../services/common.services';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-address',
  templateUrl: 'address.modal.html'
})
export class addAddressComponent implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute,
      private CommonServices: CommonServices,
      private LoginService: LoginService
  ) { }

  ngOnInit() {
  
  }
  addAddressData = [
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
  addAddressForm(formData: NgForm){
    this.addAddressData[0].firstName = formData.value.firstName;
    this.addAddressData[0].lastName = formData.value.lastName;
    this.addAddressData[0].email = formData.value.email;
    this.addAddressData[0].address = formData.value.address;
    this.addAddressData[0].address2 = formData.value.address2;
    this.addAddressData[0].city = formData.value.city;
    this.addAddressData[0].state = formData.value.state;
    this.addAddressData[0].zip = formData.value.zip;
    this.addAddressData[0].country = formData.value.country;
    this.addAddressData[0].telephone = formData.value.telephone;
    this.addAddressData[0].ext = formData.value.ext;
    this.LoginService.myAccountAddressBookPut(this.addAddressData[0]);
    //this.CheckoutStep.checkoutShippingCheck = true;
  }
}
