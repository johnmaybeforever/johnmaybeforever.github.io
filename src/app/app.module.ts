import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReferralPageComponent } from './referrals/referral-page/referral-page.component';
import { HomeComponent } from './home/home.component';
import { TopReferralsComponent } from './referrals/top-referrals/referral-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ReferralPageComponent,
    TopReferralsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
