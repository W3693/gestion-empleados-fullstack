import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Necesario para ngModel y ngForm
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component'; // ✅ Ruta corregida

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    ProductosComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,        // ✅ Importado correctamente
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // ✅ Exportación confirmada