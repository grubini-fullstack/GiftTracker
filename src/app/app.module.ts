import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './dashboard/nav/nav.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { MaincontentComponent } from './dashboard/maincontent/maincontent.component';
import { MenuitemComponent } from './dashboard/sidemenu/menuitem/menuitem.component';
import { ProductComponent } from './product/product.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BirthdaytrackerComponent } from './birthdaytracker/birthdaytracker.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    NavComponent,
    SidemenuComponent,
    MaincontentComponent,
    MenuitemComponent,
    ProductComponent,
    WatchlistComponent,
    WishlistComponent,
    BirthdaytrackerComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
