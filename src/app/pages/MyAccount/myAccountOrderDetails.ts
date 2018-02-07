import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { CommonServices } from '../../services/common.services';
import { LoginService } from '../../services/login.service';


@Component({
  templateUrl: './myAccountOrderDetails.html'
})
export class myAccountOrderDetails implements OnInit {

  constructor(
      private router: Router,
      private CommonServices: CommonServices,
      private LoginService: LoginService,
      private activatedRoute: ActivatedRoute
  ) { }

  orderDetailsId = "";
  
  ngOnInit() {
    if(sessionStorage.getItem('currentUserID') === null && sessionStorage.getItem('currentUsername') === null){
      this.router.navigate(['../loginPage']);
    }
    this.activatedRoute.params.subscribe((params: Params) => {
        this.orderDetailsId = params['id'];
    });

  }

}
