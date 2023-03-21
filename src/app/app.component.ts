import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor() {
    console.log(environment.OKTA_ISSUER);
    console.log(environment.OKTA_CLIENT_SECRET);
  }
}
