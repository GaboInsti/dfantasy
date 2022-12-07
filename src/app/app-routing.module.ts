import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Admin components
import { AdminComponent } from './components/admin/admin.component';
import { OrderHomeComponent } from './components/admin/orders/order-home/order-home.component';
// Debes de agregar estos componentes a las rutas hijas de pedidos
// OrderDetailsComponent se ocupará en dos rutas: consultar-pedido/:id y nuevo-pedido
import { OrderDetailsComponent } from './components/admin/orders/order-details/order-details.component';
// CheckOrdersComponent se ocupará en la ruta: consultar-pedidos
import { CheckOrdersComponent } from './components/admin/orders/check-orders/check-orders.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './components/login/login.guard';
import { CatalogComponent } from './components/catalog/catalog.component';
import { StaffHomeComponent } from './components/admin/staff/staff-home/staff-home.component';
import { CheckStaffComponent } from './components/admin/staff/check-staff/check-staff.component';
import { StaffDetailComponent } from './components/admin/staff/staff-detail/staff-detail.component';
import { InventoryHomeComponent } from './components/admin/inventory/inventory-home/inventory-home.component';
import { InventoryDetailsComponent } from './components/admin/inventory/inventory-details/inventory-details.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: CatalogComponent},
  { path: 'pedidos', component: AdminComponent, children: [
    { path: '', component: OrderHomeComponent },
    { path: 'consultar/todos', component: CheckOrdersComponent},
    { path: 'consultar/:id', component: OrderDetailsComponent},
    { path: 'nuevo-pedido', component: OrderDetailsComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ] },
  { path: 'empleados', component: AdminComponent, children: [
    { path: '', component: StaffHomeComponent },
    { path: 'todos', component: CheckStaffComponent},
    { path: 'nuevo-empleado', component: StaffDetailComponent },
    { path: ':id', component: StaffDetailComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ] },
  { path: 'inventario', component: AdminComponent, children: [
    { path: '', component: InventoryHomeComponent },
    { path: ':id', component: InventoryDetailsComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ]},
  { path: 'cliente', component: OrderDetailsComponent},
  { path: 'consulta/:id', component: OrderDetailsComponent},

  // Cambia el redirectTo a tu landing page
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
