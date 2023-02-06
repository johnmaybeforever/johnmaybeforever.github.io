import { Component } from '@angular/core';
import { topReferrals } from '../raw-referrals';

@Component({
  selector: 'app-top-referrals',
  templateUrl: './top-referrals.component.html',
  styleUrls: ['./top-referrals.component.css','../../app.component.css']
})
export class TopReferralsComponent {
  referrals = topReferrals;
}
