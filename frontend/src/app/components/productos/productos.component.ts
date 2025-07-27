import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../models/producto.model';

declare const M: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public productoService: ProductoService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  agregarProducto(form: NgForm) {
    if (form.value._id) {
      this.productoService.putProducto(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'Actualizado satisfactoriamente' });
        this.obtenerProductos();
      });
    } else {
      const { _id, ...datosProducto } = form.value;
      this.productoService.postProducto(datosProducto).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'Guardado satisfactoriamente' });
        this.obtenerProductos();
      });
    }
  }

  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.productoService.selectedProducto = new Producto();
    }
  }

  obtenerProductos() {
    this.productoService.getProductos().subscribe(res => {
      this.productoService.productos = res;
    });
  }

  editarProducto(producto: Producto) {
    this.productoService.selectedProducto = { ...producto };
  }

  eliminarProducto(_id: string) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productoService.deleteProducto(_id).subscribe(res => {
        M.toast({ html: 'Producto eliminado' });
        this.obtenerProductos();
      });
    }
  }
}
