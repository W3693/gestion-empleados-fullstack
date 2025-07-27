import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuarios.models'; // ✅ Ruta y nombre corregidos
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectedUsuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];

  readonly URL_API = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.URL_API);
  }

  postUsuario(usuario: Usuario): Observable<Usuario> {
    const { _id, ...datosSanitizados } = usuario;
    return this.http.post<Usuario>(this.URL_API, datosSanitizados);
  }

  putUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.URL_API}/${usuario._id}`, usuario);
  }

  deleteUsuario(_id: string): Observable<any> {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
