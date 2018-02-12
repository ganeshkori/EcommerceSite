import { Output, Input, OnInit, Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { CommonServices } from "./common.services";

@Injectable()
export class LoginService implements OnInit {

    constructor(
        private http: Http, 
        private router: Router,
        private CommonServices: CommonServices
    ){}

    userToken;

    ngOnInit() {

    }

    myAccountProfileInfo = [
        {
            "ProfileInfo": {
                "accessRight":"",
                "firstName":"",
                "lastName": "",
                "email": ""
            }
        }
    ];
    myAccountAddressBook = [];
    myAccountPaymentsInfo = [];
    myAccountWishlistProduct = [];
    myAccountOrderHistory = [];

    myAccountAddressBookPut(getData){
        this.CommonServices.loading = true;
        if(getData !== 'Delete'){
            this.myAccountAddressBook.push(getData);
        }
        this.http.put('https://ecommerce-f0063.firebaseio.com/'+this.currentUserUID()+'/0/addressBook.json', this.myAccountAddressBook)
        .subscribe(data => {
            this.CommonServices.loading = false;
        },
        err => {
            console.log("Error occured. -Put Data-");
            this.CommonServices.loading = false;
        });
    }

    myAccountPaymentsInfoPut(getData){
        this.CommonServices.loading = true;
        if(getData !== 'Delete'){
            this.myAccountPaymentsInfo.push(getData);
        }
        this.http.put('https://ecommerce-f0063.firebaseio.com/'+this.currentUserUID()+'/0/paymentsInfo.json', this.myAccountPaymentsInfo)
        .subscribe(data => {
            this.CommonServices.loading = false;
        },
        err => {
            console.log("Error occured. -Put Data-");
            this.CommonServices.loading = false;
        });
    }

    myAccountWishlistProductPut(getData){
        this.CommonServices.loading = true;
        if(getData !== 'Delete'){
            this.myAccountWishlistProduct.push(getData);
        }
        this.http.put('https://ecommerce-f0063.firebaseio.com/'+this.currentUserUID()+'/0/wishlistProduct.json', this.myAccountWishlistProduct)
        .subscribe(data => {
            this.CommonServices.loading = false;
        },
        err => {
            console.log("Error occured. -Put Data-");
            this.CommonServices.loading = false;
        });
    }

    myAccountOrderHistoryPut(getData){
        this.CommonServices.loading = true;
        this.myAccountOrderHistory.push(getData);
        this.http.put('https://ecommerce-f0063.firebaseio.com/'+this.currentUserUID()+'/0/orderHistory.json', this.myAccountOrderHistory)
        .subscribe(data => {
            this.CommonServices.loading = false;
        },
        err => {
            console.log("Error occured. -Put Data-");
            this.CommonServices.loading = false;
        });
    }

    getUserData(Option){
        this.http.get('https://ecommerce-f0063.firebaseio.com/'+this.currentUserUID()+'/0.json')
        .map(response => response.json()).subscribe(data => {
            if(data.addressBook !== undefined){
                this.myAccountAddressBook = data.addressBook;
            }
            if(data.paymentsInfo !== undefined){
                this.myAccountPaymentsInfo = data.paymentsInfo;
            }
            if(data.wishlistProduct !== undefined){
                this.myAccountWishlistProduct = data.wishlistProduct;
            }
            if(data.orderHistory !== undefined){
                this.myAccountOrderHistory = data.orderHistory;
            }
            this.myAccountProfileInfo[0].ProfileInfo.firstName = data.ProfileInfo.firstName;
            this.myAccountProfileInfo[0].ProfileInfo.lastName = data.ProfileInfo.lastName;
            this.myAccountProfileInfo[0].ProfileInfo.email = data.ProfileInfo.email;
            this.myAccountProfileInfo[0].ProfileInfo.accessRight = data.ProfileInfo.accessRight;
            this.CommonServices.loading = false;
        },
        err => {
            console.log("Error occured. --setUserData--");
            this.CommonServices.loading = false;
        });
    }

    loginServiceMsg = "";
    loginService(username: string, password: string, option: string){
        this.CommonServices.loading = true;
        firebase.auth().signInWithEmailAndPassword(username, password)
        .then(
            response => {
                firebase.auth().currentUser.getIdToken()
                .then(
                    response => {
                        this.userToken = response;
                        sessionStorage.setItem('currentUserStatus',  'true');
                        sessionStorage.setItem('currentUserID',  this.currentUserUID());
                        sessionStorage.setItem('currentUsername',  username);
                        sessionStorage.setItem('currentPassword',  password);
                        this.getUserData('option');
                        if(option==='Navigate'){
                            this.router.navigate(['']);
                        }
                    }
                ).catch(
                    response => {
                        console.log("There is some error, Please try again late.");
                        this.CommonServices.loading = false;
                        this.loginServiceMsg = "There is some error, Please try again late.";
                    }
                );
            }
        )
        .catch(
            response => {
                this.CommonServices.loading = false;
                //error => console.log(error);
                console.log("Please enter valid Email and Password");
                this.loginServiceMsg = "Please enter valid Email and Password.";
            }
        );
    }

    UserSession() {
        return this.userToken != null; 
    }

    registerServiceData(username, password, firstName, lastName){
        this.myAccountProfileInfo[0].ProfileInfo.firstName = firstName;
        this.myAccountProfileInfo[0].ProfileInfo.lastName = lastName;
        this.myAccountProfileInfo[0].ProfileInfo.email = username;
        this.myAccountProfileInfo[0].ProfileInfo.accessRight = "U";
        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(
                response => {
                    this.http.put('https://ecommerce-f0063.firebaseio.com/'+this.currentUserUID()+'.json',this.myAccountProfileInfo)
                    .subscribe(data => {
                        this.CommonServices.loading = false;
                    },
                    err => {
                        console.log("Error occured. --User Data--firebase-");
                        this.CommonServices.loading = false;
                    });
                }
            )
            .catch(
                response => {
                    this.CommonServices.loading = false;
                    console.log("Error occured. --Register User Data--firebase-");
                }
            );
    }

    registerServiceMsg = "";
    registerService(username: string, password: string, firstName, lastName){
        this.CommonServices.loading = true;
        firebase.auth().createUserWithEmailAndPassword(username, password)
            .then(
                 response => {
                    this.router.navigate(['/loginPage']);
                    this.registerServiceData(username, password, firstName, lastName);
                }
            )    
            .catch(
                response => {
                    this.CommonServices.loading = false;
                    //error => console.log(error)
                    console.log("Please enter valid information");
                    this.registerServiceMsg = "Please enter valid information.";
                }
            );
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            response => {
                this.userToken = response;
            }
        );
        return this.userToken;
    }

    logOutService(){
        firebase.auth().signOut();
        sessionStorage.setItem('currentUserStatus',  'false');
        sessionStorage.setItem('currentUserID',  null);
        sessionStorage.setItem('currentUsername',  null);
        sessionStorage.setItem('currentPassword',  null);
        this.userToken = null;
        this.router.navigate(['/loginPage']);
        this.myAccountProfileInfo = [
            {
                "ProfileInfo": {
                    "accessRight":"",
                    "firstName":"",
                    "lastName": "",
                    "email": ""
                }
            }
        ];
        this.myAccountAddressBook = [];
        this.myAccountPaymentsInfo = [];
        this.myAccountWishlistProduct = [];
        this.myAccountOrderHistory = [];
    }
    
    currentUserUID(){
        return firebase.auth().currentUser.uid;
    }

    resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
        .then(() => console.log("email sent"))
        .catch((error) => console.log(error))
    }

//     <p *ngIf="!passReset && userForm.controls.email.valid" (click)="resetPassword()">Reset Password for {{userForm.value.email}}</p>
//   <p *ngIf="passReset" >Reset requested. Check your email instructions.</p>

// passReset: boolean = false;
// resetPassword() {
//   this.auth.resetPassword(this.userForm.value['email'])
//   .then(() => this.passReset = true)
// }
}
