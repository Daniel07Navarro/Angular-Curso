import { Component, OnInit } from '@angular/core';
import { Product, productList } from './producks.mocks';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{
  
  productos?: Product[];

  ngOnInit(): void {
    this.productos = productList;
  }

  
  

}
