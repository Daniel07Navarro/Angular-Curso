import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoComponent } from './producto/producto.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {path: '',component: InicioComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'producto',component:ProductoComponent},
  {path: 'producto/:id', component: DetallesComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
