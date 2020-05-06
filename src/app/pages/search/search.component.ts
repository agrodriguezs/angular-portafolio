import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoProductoService } from '../../services/info-productos.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  			  public productos: InfoProductoService ) { }

  ngOnInit(): void {

  	this.route.params
  		.subscribe(	params => {

  			this.productos.buscarProducto( params[ 'termino' ]);


  		});

  }

}
