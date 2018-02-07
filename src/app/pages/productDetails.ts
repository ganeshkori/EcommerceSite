import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, Input, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { $ } from 'protractor';
import { ProductsService } from '../services/product.service';
import { CommonServices } from '../services/common.services';


@Component({
  selector: 'app-body',
  templateUrl: './productDetails.html'
})

export class productDetails {

  constructor(
    private activatedRoute: ActivatedRoute, 
    private http: Http, 
    private ProductsService: ProductsService,
    private CommonServices: CommonServices
  ) { }

  productID;
  productList = [];
  getProductList = [];
  addedToCart = [];

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.productID = params['id'];
      });

    this.http.get('./assets/data/product.json')
    .map(response => response.json()).subscribe(data => {
        for (let entry of data) {
            if(entry.ID===this.productID){
              //this.productList.push(entry);
            }
        }
    },
    err => {
        console.log("Error occured. --Product Details (productDetails.ts)--")
    });

    this.getProductList = this.ProductsService.productList;
    for (let entry of this.getProductList) {
        if(entry.ID===this.productID){
          this.productList.push(entry);
        }
    }
    
  }

  addToCart(event){
    this.CommonServices.AddToCartFunction(event);
  }
  

}
