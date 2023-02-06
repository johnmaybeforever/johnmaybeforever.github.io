import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'money', component: CreditCardsComponent },
  {path: 'shopping', component: ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
