import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
// se importa el modelo de interfaz para los productos
import { InterfaceProduct } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  // inyeccion de dependencia del servicio api
  private _apiService = inject(ApiService);
  // se define la interfaz para los productos
  listaProductos: InterfaceProduct[] = [];
  // inyeccion de "Router" para usar la URL como direccion de navegacion
  private _router = inject(Router);

  // ngOnInit sirve para suscribirse cada vez que se llama al componente
  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: InterfaceProduct[]) =>
      this.listaProductos = data)
  }

  // metodos
  productInfo(id: number) {
    // indicar que se viaje a la URL indicada en el array
    // ejemplo: "/app-product/1"
    this._router.navigate(['/app-product',id]);
  }

}
