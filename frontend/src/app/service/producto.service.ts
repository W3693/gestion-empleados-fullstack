import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  selectedProducto: Producto = new Producto();
  productos: Producto[] = [];

  readonly URL_API = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.URL_API);
  }

  postProducto(producto: Producto): Observable<Producto> {
    const { _id, ...datosSanitizados } = producto;
    return this.http.post<Producto>(this.URL_API, datosSanitizados);
  }

  putProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.URL_API}/${producto._id}`, producto);
  }

  deleteProducto(_id: string): Observable<any> {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
