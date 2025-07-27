import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpleadoService } from '../../service/empleado.service';
import { Empleado } from '../../models/empleado';

declare const M: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(public empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  agregarEmpleado(form: NgForm) {
    if (form.value._id) {
      // Actualiza un empleado existente
      this.empleadoService.putEmpleado(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'Actualizado satisfactoriamente' });
        this.obtenerEmpleados();
      });
    } else {
      // Crea un nuevo empleado (excluye _id si está vacío)
      const { _id, ...datosEmpleado } = form.value;
      this.empleadoService.postEmpleado(datosEmpleado).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'Guardado satisfactoriamente' });
        this.obtenerEmpleados();
      });
    }
  }

  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }

  obtenerEmpleados() {
    this.empleadoService.getEmpleados().subscribe(res => {
      this.empleadoService.empleados = res;
    });
  }

  editarEmpleado(empleado: Empleado) {
    this.empleadoService.selectedEmpleado = { ...empleado };
  }

  eliminarEmpleado(_id: string) {
    if (confirm('¿Estás seguro de eliminar este empleado?')) {
      this.empleadoService.deleteEmpleado(_id).subscribe(res => {
        M.toast({ html: 'Empleado eliminado' });
        this.obtenerEmpleados();
      });
    }
  }
}
