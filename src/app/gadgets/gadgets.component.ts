import { Component } from '@angular/core';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.css']
})
export class GadgetsComponent {
  
  fountainPros=["quiet", "auto-shutoff", "Outside is stainless steel", ""]
  fountainCons=["Made in China", "Tiny motor filter also needs to be cleaned/replaced every month", 
  "Pump is not able to reach low level water (but not as bad as others)", "Cable is not chew-proof", ]
}
