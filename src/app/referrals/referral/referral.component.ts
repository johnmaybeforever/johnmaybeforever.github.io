import { Component, Input } from '@angular/core';
import { referral } from '../referral.interface';

@Component({
    selector: 'app-referral',
    templateUrl: './referral.component.html',
    styleUrls: ['./referral.component.css']
})
export class ReferralComponent {
    @Input() referral!: referral;
    constructor () {}
    removeStrings(title: string){
        const regex=/ /g;
        return title.replace(regex, '').toLowerCase();
      }
}