import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, Input, Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()

@Component({
  selector: 'app-body',
  templateUrl: './contactUs.html'
})


export class contactUsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http: Http) { }


  ngOnInit() {


}
}