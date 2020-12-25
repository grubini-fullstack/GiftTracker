import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ItemComponent } from './dashboard/watchlist/item/item.component';
import { RetailerComponent } from './dashboard/product/retailer/retailer.component';
import { ProductDetailComponent } from './dashboard/product/product-detail/product-detail.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'birthdaytracker', component: BirthdaytrackerComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'payment', component: PaymentComponent },
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
