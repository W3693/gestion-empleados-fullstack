import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../service/usuarios.service'; // ✅ Ruta corregida
import { Usuario } from '../../models/usuarios.models';          // ✅ Ruta confirmada

declare const M: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  agregarUsuario(form: NgForm) {
    if (form.value._id) {
      this.usuarioService.putUsuario(form.value).subscribe((res: any) => {
        this.resetForm(form);
        M.toast({ html: 'Usuario actualizado satisfactoriamente' });
        this.obtenerUsuarios();
      });
    } else {
      const { _id, ...datosUsuario } = form.value;
      this.usuarioService.postUsuario(datosUsuario).subscribe((res: any) => {
        this.resetForm(form);
        M.toast({ html: 'Usuario guardado satisfactoriamente' });
        this.obtenerUsuarios();
      });
    }
  }

  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.usuarioService.selectedUsuario = new Usuario();
    }
  }

  obtenerUsuarios() {
    this.usuarioService.getUsuarios().subscribe((res: any) => {
      this.usuarioService.usuarios = res;
    });
  }

  editarUsuario(usuario: Usuario) {
    this.usuarioService.selectedUsuario = { ...usuario };
  }

  eliminarUsuario(_id: string) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.usuarioService.deleteUsuario(_id).subscribe((res: any) => {
        M.toast({ html: 'Usuario eliminado' });
        this.obtenerUsuarios();
      });
    }
  }
}
