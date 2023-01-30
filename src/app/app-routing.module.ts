import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferralPageComponent } from './referrals/referral-page/referral-page.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'referrals', component: ReferralPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
