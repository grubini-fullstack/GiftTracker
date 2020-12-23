import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './dashboard/nav/nav.component';
import { MaincontentComponent } from './dashboard/maincontent/maincontent.component';
import { ProductComponent } from './product/product.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BirthdaytrackerComponent } from './birthdaytracker/birthdaytracker.component';
import { OrderComponent } from './order/order.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './account/profile/profile.component';
import { NotificationComponent } from './account/notification/notification.component';
import { HistoryComponent } from './account/history/history.component';
import { PaymentComponent } from './account/payment/payment.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'wishlist', component: WishlistComponent },
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
