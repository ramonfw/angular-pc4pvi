import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('El producto ha sido compartido!');
  }

  onNotify(vPrice,vCurrency) {
    window.alert('Le notificaremos si el producto entra en precio. (Precico actual: '+vPrice+''+vCurrency+') ');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/