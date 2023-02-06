import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReferralPageComponent } from './referrals/referral-page/referral-page.component';
import { HomeComponent } from './home/home.component';
import { TopReferralsComponent } from './referrals/top-referrals/top-referrals.component';
import { ProductsComponent } from './products/products.component';
import { MouseComponent } from './products/mouse/mouse.component';
import { CreditCardsComponent } from './shopping/credit-cards/credit-cards.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProsConsTableComponent } from './common/pros-cons-table/pros-cons-table.component';
import { MoneyComponent } from './money/money.component';
import { SignupsComponent } from './money/signups/signups.component';
import { ReferralComponent } from './referrals/referral/referral.component';
import { ReviewSitesComponent } from './shopping/review-sites/review-sites.component';
@NgModule({
  declarations: [
    ReviewSitesComponent,
    ReferralComponent,
    SignupsComponent,
    ProsConsTableComponent,
    AppComponent,
    ReferralPageComponent,
    TopReferralsComponent,
    HomeComponent,
    ProductsComponent,
    MouseComponent,
    CreditCardsComponent,
    ShoppingComponent,
    MoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
