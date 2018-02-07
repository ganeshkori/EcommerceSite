import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { CommonServices } from '../../services/common.services';
import { LoginService } from '../../services/login.service';


@Component({
  templateUrl: './myAccountAddress.html'
})
export class myAccountAddress implements OnInit {

  constructor(
      private router: Router,
      private CommonServices: CommonServices,
      private LoginService: LoginService
  ) { }

  accountAddressModal = false;

  ngOnInit() {
    if(sessionStorage.getItem('currentUserID') === null && sessionStorage.getItem('currentUsername') === null){
      this.router.navigate(['../loginPage']);
    }
  }

  accountAddAddress(){
    this.accountAddressModal = true;
  }

  accountCloseAddress(){
    this.accountAddressModal = false;
  }

  accountAddressRemove(removeData){
    this.LoginService.myAccountAddressBook.splice(this.LoginService.myAccountAddressBook.indexOf(removeData), 1);
    this.LoginService.myAccountAddressBookPut('Delete');
  }

}
