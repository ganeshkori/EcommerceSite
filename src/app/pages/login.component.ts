import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { LoginService } from '../services/login.service';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  templateUrl: './login.component.html'
})


export class loginComponent implements OnInit {

  constructor(
        private activatedRoute: ActivatedRoute, 
        private http: Http, 
        private LoginService: LoginService, 
        private router: Router
    ) { }

    ganesh = [
        {
            "ganesh": "01",
            "ganesh2": "02",
            "ganesh3": "03",
            "ganesh4": "04"
        }
    ]

    ngOnInit() {
        this.ganesh[0].ganesh2 = "0001";
        // this.http.put('https://ecommerce-f0063.firebaseio.com/ganesh.json',this.ganesh)
        // .subscribe(data => {
        //     console.log(data);
        // },
        // err => {
        //     console.log("Error occured. --login.component--firebase-1-");
        // });

        // this.http.get('https://ecommerce-f0063.firebaseio.com/ganesh.json')
        // .subscribe(data => {
        //     console.log(data);
        // },
        // err => {
        //     console.log("Error occured. --PHP--");
        // });
        // this.http.get('https://ecommerce-f0063.firebaseio.com/ganesh.json')
        // .map(response => response.json()).subscribe(data => {
        //     console.log(data);
        // },
        // err => {
        //     console.log("Error occured. --login.component--firebase-2-")
        // });

//         var auth = firebase.auth();
// var emailAddress = "ganesh@pragiti.com";

// auth.sendPasswordResetEmail(emailAddress).then(function() {
//   console.log('Email sent');
// }).catch(function(error) {
//   console.log('An error happened');
// });
    }

    loginSubmit(loginForm: NgForm){
        const username = loginForm.value.username;
        const password = loginForm.value.password;
        this.LoginService.loginService(username, password, 'Navigate');
    }
}