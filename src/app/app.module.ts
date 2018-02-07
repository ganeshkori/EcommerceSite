import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer.component';
import { HeaderComponent } from './common/header.component';
import { minicartComponent } from './common/minicart.component';
import { NavigationComponent } from './common/navigation.component';
import { DropdownDirective } from './common/dropdown.directive';

//Common Services
import { CommonServices } from './services/common.services';
import { ProductsService } from './services/product.service';
import { LoginService } from './services/login.service';

import { homepage } from './pages/homepage';
import { products } from './pages/products';
import { productDetails } from './pages/productDetails';
import { pagenotfound } from './pages/pagenotfound';
import { cartPageComponent } from './pages/cartPage';
import { contactUsComponent } from './pages/contactUs';
import { loginComponent } from './pages/login.component';
import { registerComponent } from './pages/register.component';
import { addAddressComponent } from './pages/Modal/address.modal';
import { addPaymentComponent } from './pages/Modal/payment.modal';

// Checkout Pages
import { CheckoutStep } from './pages/Checkout/checkout.step';
import { checkoutSummary } from './pages/Checkout/checkout.summary';
import { checkoutShippingAddress } from './pages/Checkout/checkoutShippingAddress';
import { checkoutBillingAddress } from './pages/Checkout/checkoutBillingAddress';
import { checkoutShippingOptions } from './pages/Checkout/checkoutShippingOptions';
import { checkoutPaymentMethod } from './pages/Checkout/checkoutPaymentMethod';
import { checkoutConfirmation } from './pages/Checkout/checkoutConfirmation';

// My Account Pages
import { myAccountDashboard } from './pages/MyAccount/myAccountDashboard';
import { myAccountAddress } from './pages/MyAccount/myAccountAddress';
import { myAccountPayment } from './pages/MyAccount/myAccountPayment';
import { myAccountWishlist } from './pages/MyAccount/myAccountWishlist';
import { myAccountOrderHistory } from './pages/MyAccount/myAccountOrderHistory';
import { myAccountOrderDetails } from './pages/MyAccount/myAccountOrderDetails';

const appRoutes: Routes = [
  { path: '', component: homepage },
  { path: 'products', component: products },
  { path: 'productDetails/:id', component: productDetails },
  { path: 'cartPage', component: cartPageComponent },
  { path: 'contactUs', component: contactUsComponent },
  { path: 'loginPage', component: loginComponent },
  { path: 'registerPage', component: registerComponent },
  { path: 'checkout', component: CheckoutStep },
  { path: 'checkoutConfirmation', component: checkoutConfirmation },
  { path: 'myAccount', component: myAccountDashboard },
  { path: 'myAccount/Address', component: myAccountAddress },
  { path: 'myAccount/Payment', component: myAccountPayment },
  { path: 'myAccount/Wishlist', component: myAccountWishlist },
  { path: 'myAccount/OrderHistory', component: myAccountOrderHistory },
  { path: 'myAccount/OrderDetails/:id', component: myAccountOrderDetails },
  { path: '**', component: pagenotfound }

];
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
	  FooterComponent,
    HeaderComponent,
    minicartComponent,
    NavigationComponent,
    homepage,
    products,
    productDetails,
    pagenotfound,
    cartPageComponent,
    contactUsComponent,
    DropdownDirective,
    loginComponent,
    registerComponent,
    CheckoutStep,
    checkoutSummary,
    checkoutShippingAddress,
    checkoutBillingAddress,
    checkoutShippingOptions,
    checkoutPaymentMethod,
    checkoutConfirmation,
    addAddressComponent,
    addPaymentComponent,
    myAccountDashboard,
    myAccountAddress,
    myAccountPayment,
    myAccountWishlist,
    myAccountOrderHistory,
    myAccountOrderDetails
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
	  FormsModule,
	  HttpModule
  ],
  providers: [ProductsService, LoginService, CommonServices],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
