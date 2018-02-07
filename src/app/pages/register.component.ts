
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './register.component.html'
})


export class registerComponent implements OnInit {

  constructor(
        private LoginService: LoginService, 
    ) { }

    ngOnInit() {
        
    }

    registerSubmit(loginForm: NgForm){
        const username = loginForm.value.username;
        const password = loginForm.value.password;
        const firstName = loginForm.value.firstName;
        const lastName = loginForm.value.lastName;
        this.LoginService.registerService(username, password, firstName, lastName);
    }
}