import { Component, Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ProductsService } from '../services/product.service';
import { CommonServices } from '../services/common.services';


@Injectable()

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html'
})


export class minicartComponent {

    constructor(
        private ProductsService: ProductsService,
        private CommonServices: CommonServices
    ) { }


    ngOnInit() {

        
    }
}
