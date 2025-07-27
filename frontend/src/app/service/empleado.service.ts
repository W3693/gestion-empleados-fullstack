import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  selectedEmpleado: Empleado = new Empleado();
  empleados: Empleado[] = [];

  readonly URL_API = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.URL_API);
  }

  // 🔧 Corregido: excluye _id antes de enviar el nuevo empleado
  postEmpleado(empleado: Empleado): Observable<Empleado> {
    const { _id, ...datosSanitizados } = empleado;
    return this.http.post<Empleado>(this.URL_API, datosSanitizados);
  }

  putEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.URL_API}/${empleado._id}`, empleado);
  }

  deleteEmpleado(_id: string): Observable<any> {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
