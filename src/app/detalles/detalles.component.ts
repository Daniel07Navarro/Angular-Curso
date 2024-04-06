import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, productList } from '../producto/producks.mocks';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements  OnInit{


  productList: Product[] = productList;

  producto?: Product;

  loading: boolean = true;

  color?: string;

  constructor(private _route: ActivatedRoute,private router:Router){

  }

  verificar(id: number):any{
    return this.productList.find(prod => prod.id == id);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(params =>{
        this.producto = this.verificar(params['id'])
        this.color = this.producto?.precio as number > 5 ? 'red' : '';
        this.loading = false;
      })
    }, 1500);
  }

  navegar(){
    this.router.navigate(['/producto']);
  }

  alerta(){
    alert("Nose");
  }




}
