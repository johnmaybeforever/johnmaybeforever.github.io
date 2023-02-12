import { Component } from '@angular/core';

@Component({
  selector: 'app-intuit',
  templateUrl: './intuit.component.html',
  styleUrls: ['./intuit.component.css']
})
export class IntuitComponent {
  pros=[
    "Free, convenient consolidation of accounts",
    "Helpful notifications of fees and credit score changes",
    "Decent default grouping and allows further customization"
  ]

  cons=[
    "Heavy advertisements on site",
    "Certain banks like PNC require a workaround or monthly sign-ins",
    "No privacy for your data",
  ]
}
