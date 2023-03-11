import { Component } from '@angular/core';

@Component({
  selector: 'app-foot-massage',
  templateUrl: './foot-massage.component.html',
  styleUrls: ['./foot-massage.component.css']
})
export class FootMassageComponent {
  pros = [
    "Massages calves as well as feet",
    "Massage areas can be turned off",
    ""
  ]
  cons = [
    "Heat takes 10 minutes to warm up and does not get very hot",
    "No pressure settings (only speed). Some complain it is too strong.",
    "Made in China"
  ]
  humanPros = [
    "Best",
    ""
  ]
  humanCons = [
    "Made in China",
    "Expensive"
  ]
}
