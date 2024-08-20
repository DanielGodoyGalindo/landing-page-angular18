import { Component, inject, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { InterfaceProduct } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductsComponent, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent implements OnInit {

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);
  public producto?: InterfaceProduct;
  loading: boolean = true;

  // datos del producto, obteniendo el numero de id con "ActivatedRoute"
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((datos: InterfaceProduct) => {
        this.producto = datos;
        this.loading = false;
      })
    })
  }

}
