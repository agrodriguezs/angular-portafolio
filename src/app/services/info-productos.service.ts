import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { InfoProductoIdx } from '../interfaces/info-productos-idx.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoProductoService {

  productosidx: InfoProductoIdx[]  = [];
  cargando = true;

  constructor(private http: HttpClient){
    this.cargarProductosIdx();
  }

  private cargarProductosIdx() {
     this.http.get('https://angular-html-f32d9.firebaseio.com/productos_idx.json')
     .subscribe( (resp: InfoProductoIdx[]) => {
     this.productosidx = resp;
     this.cargando = false;
   });
  }

  getProducto( id: string ) {
    return this.http.get(`https://angular-html-f32d9.firebaseio.com/productos/${ id }.json`);
  }
}
