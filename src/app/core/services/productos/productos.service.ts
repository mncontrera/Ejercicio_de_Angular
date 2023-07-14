import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  listaProductos?: Producto[];

  solicitarProductos(): Observable<Producto[]>{
    return this.http.get<any>('https://dummyjson.com/products');
  }

}
