import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { Http, Response } from '@angular/http';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  optionSelectedCheckGet = "Show";
  optionSelectedCheck(optionSelectedShow: string){
    this.optionSelectedCheckGet = optionSelectedShow;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAHLB650bSKoeEtCzdW4WpUDKdiFkol1DA",
      authDomain: "ecommerce-f0063.firebaseapp.com"

    });
  }
}
