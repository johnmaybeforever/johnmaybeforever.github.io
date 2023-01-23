import { Component } from '@angular/core';
import { referrals } from '../raw-referrals';

@Component({
  selector: 'app-referral-page',
  templateUrl: './referral-page.component.html',
  styleUrls: ['./referral-page.component.css', '../../app.component.css']
})
export class ReferralPageComponent {
  referrals = referrals;
}
