import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoProductoIdx } from '../interfaces/info-productos-idx.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoProductoService {

  productosidx: InfoProductoIdx[]  = [];
  productosFiltrados: InfoProductoIdx[]  = [];
  cargando = true;

  constructor(private http: HttpClient){
    this.cargarProductosIdx();
  }

  private cargarProductosIdx() {

      return new Promise((resolve, reject ) => {

         this.http.get('https://angular-html-f32d9.firebaseio.com/productos_idx.json')
         .subscribe( (resp: InfoProductoIdx[]) => {
         this.productosidx = resp;
         this.cargando = false;
         resolve();
      });
   });
  }

  getProducto( id: string ) {
    return this.http.get(`https://angular-html-f32d9.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( termino: string) {

    if (this.productosidx.length === 0) {
      this.cargarProductosIdx().then(()=>{
        this.filtrarProducto( termino); 
      }); 
    } else{
        this.filtrarProducto( termino); 
    }
  };

  private filtrarProducto( termino: string) {
    
    this.productosFiltrados = [];
    termino = termino.toLocaleLowerCase();
    this.productosidx.forEach( prod => {

      const titulo = prod.titulo.toLocaleLowerCase();
      const categoria = prod.categoria.toLocaleLowerCase();

      if (categoria.indexOf(termino) >= 0 || titulo.indexOf(termino) >= 0 ) {
        this.productosFiltrados.push(prod);
      }

    });
  }

}
