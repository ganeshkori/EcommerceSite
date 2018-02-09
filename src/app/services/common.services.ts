import { Output, Input, OnInit, Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { DatePipe } from '@angular/common';
import * as firebase from 'firebase';
import { ProductsService } from "./product.service";

@Injectable()
export class CommonServices implements OnInit {

    constructor(
        private http: Http,
        private ProductsService: ProductsService
    ){}

    addedToCartProduct = [];
    loading;

    ngOnInit() {
        this.loading = false;
    }

    productTotalFunc(amount){
        for (let entry of this.addedToCartProduct) {
            if(entry.ID===sessionStorage.getItem(entry.ID)){
                amount += parseInt(entry.Price) * entry.Qty;
            }
        }
        return amount;
    }

    taxFunc(amount){
        return amount / 7;
    }

    currencyFormat(amount) {
        return amount.toLocaleString('en-US', { style: 'currency', currency: 'INR' });
    }

    shippingHandling(){
        return 15;
    }

    // MiniCart Start
    MiniCartFunction(){
        for (let entry of this.ProductsService.productList) {
            if(entry.ID===sessionStorage.getItem(entry.ID)){
                this.addedToCartProduct.push(entry);
                var updateQty = this.addedToCartProduct.length - 1;
                this.addedToCartProduct[updateQty].Qty = sessionStorage.getItem("Qty"+entry.ID);
            }
        }        
    }
    // MiniCart End

    AddToCartFunctionPush(getProductId, getProductQty){
        for (let entry of this.ProductsService.productList) {
            if(entry.ID===getProductId){
                this.addedToCartProduct.push(entry);
                sessionStorage.setItem(getProductId,  getProductId);
                sessionStorage.setItem("Qty"+getProductId,  getProductQty);
            }
        }
        var updateQty = this.addedToCartProduct.length - 1;
        this.addedToCartProduct[updateQty].Qty = getProductQty;
    }
    AddToCartFunction(event, getProductQty){
        if(sessionStorage.getItem(event)===event){
            alert("Already in Cart : "+event);
        }else{
            alert("Added To Cart : "+event);
            this.AddToCartFunctionPush(event, getProductQty);
        }
    }

    
}
