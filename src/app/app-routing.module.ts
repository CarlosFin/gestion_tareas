import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryButtonComponent } from './primary-button/primary-button.component'; // Importa el componente

const routes: Routes = [
  { path: '', component: PrimaryButtonComponent } // Ruta predeterminada que muestra PrimaryButtonComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
