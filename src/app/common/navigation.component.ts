import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
	
	constructor(
		private LoginService: LoginService,
		private router: Router,
	) { }

	//UserSessionAdd;

	ngOnInit() {

		//this.UserSessionAdd = this.LoginService.UserSession();

		if(sessionStorage.getItem('currentUserStatus')==="true"){
				//this.LoginService.UserSession(sessionStorage.getItem('currentUser'), "true");
		}
	}

	logOut(){
		this.LoginService.logOutService();
	}
}
