import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component'; // ✅ Importación agregada

const routes: Routes = [
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'usuarios', component: UsuariosComponent }, // ✅ Ruta agregada
  { path: '', redirectTo: '/empleados', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
