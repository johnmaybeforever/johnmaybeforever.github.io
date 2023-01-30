import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  route= ""
  constructor(private router: Router){
    this.route = this.router.url;
    this.router.events.subscribe((val: any) =>{
      if (val.url){
      this.route = val?.url;
    }
    })
  }
  
}
