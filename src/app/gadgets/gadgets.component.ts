import { Component } from '@angular/core';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.css']
})
export class GadgetsComponent {
  
  fountainPros=["quiet", "auto-shutoff", ""]
  fountainCons=["Made in China", "Cable is not chew-proof", "Pump not able to reach low level water (but not as bad as others)"]
}
