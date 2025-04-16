import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserRxjsComponent } from "./user-rxjs/user-rxjs.component";
import { UserSignalsComponent } from "./user-signals/user-signals.component";

@Component({
  selector: 'app-root',
  imports: [UserRxjsComponent, UserSignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-examples';
}
