import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'content-projection';

  btnClicked($event) {
    console.log($event)
  
    alert('button clicked')
  }
}
