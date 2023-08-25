import { Component } from '@angular/core';

@Component({
  selector: 'app-lens-wipes',
  templateUrl: './lens-wipes.component.html',
  styleUrls: ['./lens-wipes.component.css']
})
export class LensWipesComponent {
  pros = ["Larger, wetter tissue can clean multiple small screens. Or 1/4 of a large TV", "Good for messier cleanups"]
  cons = ["Slower drying", ""]

  pros2 = ["Quick drying, ideal for a single lens or screen", "Easier for beginners"]
  cons2 = ["Made in China", "Many wipes needed to clean a TV"]
}
