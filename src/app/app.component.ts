import { Component } from '@angular/core';
import {MiscItemInfoPDTO} from "./data-list/miscItemInfoPDTO";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playground';

  log($event: MiscItemInfoPDTO) {
    console.log($event);
  }
}
