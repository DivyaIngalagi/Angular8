import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() menuText:string;
  count = 0;
  constructor() { 
    this.menuText="";
  }

  ngOnInit(): void {
  }

  increment() {
    this.count++;
  }
  
  decrement() {
    this.count--;
  }
}
