import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JunoComponent } from './referrals/bank/juno/juno.component';
import { CurrentComponent } from './referrals/bank/current/current.component';
import { SamsungComponent } from './referrals/shopping/samsung/samsung.component';
import { CoinbaseComponent } from './referrals/money/coinbase/coinbase.component';
import { StashComponent } from './referrals/money/stash/stash.component';

@NgModule({
  declarations: [
    AppComponent,
    JunoComponent,
    CurrentComponent,
    SamsungComponent,
    CoinbaseComponent,
    StashComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
