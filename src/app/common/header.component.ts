import { Component, EventEmitter, Output, Input, Injectable, OnInit } from '@angular/core';
import {Router, Params} from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Location } from '@angular/common';
import { LoginService } from '../services/login.service';
import { CommonServices } from '../services/common.services';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
        private http: Http, 
        private LoginService: LoginService, 
        private router: Router,
        private CommonServices: CommonServices,
        private location: Location
    ) {}


    ngOnInit() {

      this.CommonServices.MiniCartFunction();
      if(sessionStorage.getItem('currentUserID') !== 'null' && sessionStorage.getItem('currentUsername') !== null){
        if(window.location.pathname==="/loginPage"){
          this.LoginService.loginService(sessionStorage.getItem('currentUsername'),sessionStorage.getItem('currentPassword'),'Navigate');
        }else{
          this.LoginService.loginService(sessionStorage.getItem('currentUsername'),sessionStorage.getItem('currentPassword'),'NoNavigate');
        }
       }
      
    
    }

}
