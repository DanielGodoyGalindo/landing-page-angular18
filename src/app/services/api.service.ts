import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi: string = 'https://fakestoreapi.com/products';
  // inyección de dependencia
  private _http = inject(HttpClient);

  // metodos del servicio
  // obtener todos los productos
  getProducts(): Observable<InterfaceProduct[]> {
    // devuelve productos de tipo InterfaceProduct
    return this._http.get<InterfaceProduct[]>(this.urlApi);
  }

  // obtener producto por id
  getProduct(id: number): Observable<InterfaceProduct> {
    return this._http.get<InterfaceProduct>(`${this.urlApi}/${id}`);
  }
}
