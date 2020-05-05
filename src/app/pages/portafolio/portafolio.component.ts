import { Component, OnInit } from '@angular/core';
import { InfoProductoService } from '../../services/info-productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public productos: InfoProductoService) { }

  ngOnInit(): void {
  }

}
