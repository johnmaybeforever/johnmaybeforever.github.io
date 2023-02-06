import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReferralPageComponent } from './referrals/referral-page/referral-page.component';
import { HomeComponent } from './home/home.component';
import { TopReferralsComponent } from './referrals/top-referrals/referral-page.component';
import { ProductsComponent } from './products/products.component';
import { MouseComponent } from './products/mouse/mouse.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { GiftcardsComponent } from './credit-cards/giftcards/giftcards.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProsConsTableComponent } from './common/pros-cons-table/pros-cons-table.component';
@NgModule({
  declarations: [
    ProsConsTableComponent,
    AppComponent,
    ReferralPageComponent,
    TopReferralsComponent,
    HomeComponent,
    ProductsComponent,
    MouseComponent,
    CreditCardsComponent,
    GiftcardsComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
