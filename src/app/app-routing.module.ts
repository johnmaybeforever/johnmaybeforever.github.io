import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { HomeComponent } from './home/home.component';
import { MoneyComponent } from './money/money.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { ShoppingComponent } from './shopping/shopping.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'money', component: MoneyComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'gadgets', component: GadgetsComponent },
  { path: 'all', component: AllComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
