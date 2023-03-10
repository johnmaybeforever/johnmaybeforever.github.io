import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReferralPageComponent } from './referrals/referral-page/referral-page.component';
import { HomeComponent } from './home/home.component';
import { TopReferralsComponent } from './referrals/top-referrals/top-referrals.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { FootMassageComponent } from './gadgets/foot-massage/foot-massage.component';
import { CreditCardsComponent } from './shopping/credit-cards/credit-cards.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProsConsTableComponent } from './common/pros-cons-table/pros-cons-table.component';
import { MoneyComponent } from './money/money.component';
import { SignupsComponent } from './money/signups/signups.component';
import { ReferralComponent } from './referrals/referral/referral.component';
import { ReviewSitesComponent } from './shopping/review-sites/review-sites.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IntuitComponent } from './money/intuit/intuit.component';
import { AllComponent } from './all/all.component';
import { IBondsComponent } from './money/i-bonds/i-bonds.component';

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
    GadgetsComponent,
    FootMassageComponent,
    CreditCardsComponent,
    ShoppingComponent,
    MoneyComponent,
    NotFoundComponent,
    IntuitComponent,
    AllComponent,
    IBondsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
