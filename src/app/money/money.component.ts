import { Component } from '@angular/core';
import { juno } from '../referrals/raw-referrals';
import { referral } from '../referrals/referral.interface';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent {
  juno: referral = juno;
}
