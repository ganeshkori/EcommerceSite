import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-body',
  templateUrl: './homepage.html'
})
export class homepage implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  }

}
