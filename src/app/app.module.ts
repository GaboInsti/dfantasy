import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

// Login component
import { LoginComponent } from './components/login/login.component';

// Admin components
import { AdminComponent } from './components/admin/admin.component';
import { OrderHomeComponent } from './components/admin/orders/order-home/order-home.component';
import { CheckOrdersComponent } from './components/admin/orders/check-orders/check-orders.component';
import { OrderDetailsComponent } from './components/admin/orders/order-details/order-details.component';
import { StaffHomeComponent } from './components/admin/staff/staff-home/staff-home.component';
import { CheckStaffComponent } from './components/admin/staff/check-staff/check-staff.component';
import { StaffDetailComponent } from './components/admin/staff/staff-detail/staff-detail.component';
import { InventoryHomeComponent } from './components/admin/inventory/inventory-home/inventory-home.component';
import { InventoryDetailsComponent } from './components/admin/inventory/inventory-details/inventory-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    AdminComponent,
    OrderHomeComponent,
    CheckOrdersComponent,
    OrderDetailsComponent,
    StaffHomeComponent,
    CheckStaffComponent,
    StaffDetailComponent,
    InventoryHomeComponent,
    InventoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
