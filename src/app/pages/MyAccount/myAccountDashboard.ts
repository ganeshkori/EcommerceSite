import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CommonServices } from '../../services/common.services';
import { LoginService } from '../../services/login.service';


@Component({
  templateUrl: './myAccountDashboard.html'
})
export class myAccountDashboard implements OnInit {

  constructor(
      private router: Router,
      private CommonServices: CommonServices,
      private LoginService: LoginService
  ) { }
  
  ngOnInit() {
    if(sessionStorage.getItem('currentUserID') === null && sessionStorage.getItem('currentUsername') === null){
      this.router.navigate(['../loginPage']);
    }
  }

}
