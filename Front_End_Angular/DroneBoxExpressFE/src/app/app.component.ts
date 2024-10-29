import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.reset.css', './app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'DroneBoxExpressFE';
}
