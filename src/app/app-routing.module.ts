import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoneyComponent } from './money/money.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShoppingComponent } from './shopping/shopping.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'money', component: MoneyComponent },
  {path: 'shopping', component: ShoppingComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
