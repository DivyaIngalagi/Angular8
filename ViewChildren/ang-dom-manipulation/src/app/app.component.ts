import { Component, QueryList, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-dom-manipulation';
  // @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>;
  //@ViewChildren(AlertComponent, { read: ElementRef }) alerts: QueryList<AlertComponent>;
  @ViewChild(AlertComponent) alerts: AlertComponent;
  // ngAfterViewInit() {
    // this.alerts.forEach(alertInstance => console.log(alertInstance));
  // }
  ngAfterViewInit() {
    console.log(this.alerts);
  }
}
