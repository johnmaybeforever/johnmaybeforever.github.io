import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoneyComponent } from './money/money.component';
import { ShoppingComponent } from './shopping/shopping.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'money', component: MoneyComponent },
  {path: 'shopping', component: ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
