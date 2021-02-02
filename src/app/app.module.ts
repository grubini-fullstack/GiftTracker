import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { MaincontentComponent } from './dashboard/maincontent/maincontent.component';
import { ProductComponent } from './dashboard/product/product.component';
import { WatchlistComponent } from './dashboard/watchlist/watchlist.component';
import { WishlistComponent } from './dashboard/wishlist/wishlist.component';
import { BirthdaytrackerComponent } from './birthdaytracker/birthdaytracker.component';
import { OrderComponent } from './dashboard/order/order.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './account/profile/profile.component';
import { NotificationComponent } from './account/notification/notification.component';
import { HistoryComponent } from './account/history/history.component';
import { PaymentComponent } from './account/payment/payment.component';
import { FootComponent } from './foot/foot.component';
import { SearchbarComponent } from './dashboard/product/searchbar/searchbar.component';
import { ItemComponent } from './dashboard/wishlist/item/item.component';
import { RetailerComponent } from './dashboard/product/retailer/retailer.component';
import { ProductDetailComponent } from './dashboard/product/product-detail/product-detail.component';
import { AuthGuard } from 'src/shared/guard/auth.guard';
import { RegistryComponent } from './registry/registry.component';
import { InputComponent } from './input/input.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductComponent },
  { path: 'watchlist', component: WatchlistComponent, canActivate: [AuthGuard] },
  { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard] },
  { path: 'birthdaytracker', component: BirthdaytrackerComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrderComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'notifications', component: NotificationComponent, canActivate: [AuthGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    BirthdaytrackerComponent,
    DashboardComponent,
    FootComponent,
    HistoryComponent,
    LoginComponent,
    MaincontentComponent,
    NavComponent,
    NotificationComponent,
    ProductComponent,
    PaymentComponent,
    ProfileComponent,
    OrderComponent,
    WatchlistComponent,
    WishlistComponent,
    SearchbarComponent,
    ItemComponent,
    RetailerComponent,
    ProductDetailComponent,
    RegistryComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
