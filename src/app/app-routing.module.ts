import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Admin components
import { AdminComponent } from './components/admin/admin.component';
import { OrderHomeComponent } from './components/admin/orders/order-home/order-home.component';
// Debes de agregar estos componentes a las rutas hijas de pedidos
// OrderDetailsComponent se ocupará en dos rutas: consultar-pedido/:id y nuevo-pedido
import { OrderDetailsComponent } from './components/admin/orders/order-details/order-details.component';
// CheckOrdersComponent se ocupará en la ruta: consultar-pedidos
import { CheckOrdersComponent } from './components/admin/orders/check-orders/check-orders.component';

const routes: Routes = [
  { path: 'pedidos', component: AdminComponent, children: [
    { path: '', component: OrderHomeComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ] },
  // Cambia el redirectTo a tu landing page
  {path: '**', redirectTo: 'pedidos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
