import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReferralPageComponent } from './referrals/referral-page/referral-page.component';
import { HomeComponent } from './home/home.component';
import { TopReferralsComponent } from './referrals/top-referrals/referral-page.component';
import { ProductsComponent } from './products/products.component';
import { MouseComponent } from './products/mouse/mouse.component';
import { MoneyComponent } from './money/money.component';
import { GiftcardsComponent } from './money/giftcards/giftcards.component';
@NgModule({
  declarations: [
    AppComponent,
    ReferralPageComponent,
    TopReferralsComponent,
    HomeComponent,
    ProductsComponent,
    MouseComponent,
    MoneyComponent,
    GiftcardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
