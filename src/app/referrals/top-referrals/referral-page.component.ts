import { Component } from '@angular/core';
import { topReferrals } from '../raw-referrals';

@Component({
  selector: 'app-top-referrals',
  templateUrl: './referral-page.component.html',
  styleUrls: ['./referral-page.component.css', '../../app.component.css']
})
export class TopReferralsComponent {
  referrals = topReferrals;
  removeStrings(title: string){
    const regex=/ /g;
    return title.replace(regex, '').toLowerCase();
  }
}
