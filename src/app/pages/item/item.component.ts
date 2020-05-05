import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoProductos } from '../../interfaces/info-productos.interface';
import { InfoProductoService } from '../../services/info-productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: InfoProductos;
  id: string;

  constructor(private route: ActivatedRoute, public productoService: InfoProductoService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe( parametros => {
      this.productoService.getProducto(parametros[ "id" ])
      .subscribe( (producto: InfoProductos) => {
        this.producto = producto;
        this.id = parametros[ "id" ];
      });
    });
  }

}
