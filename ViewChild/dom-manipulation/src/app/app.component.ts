import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'dom-manipulation';
  @ViewChild(ChildComponent) child: ChildComponent;
  // @ViewChild("child", {static:true}) child: ChildComponent;
 
  ngOnInit():void{
    //This output will be visible if static is set to true.
    // this.child.count=150;
    // console.log("ngonit");
    // this.child.menuText = "Contact Us";
    // console.log(this.child.count );
    // console.log(this.child.menuText );
    //Current count will be 0 if static is set to false.
  }

  ngAfterViewInit():void{
    //This output will be visible if static is set to false.
    this.child.count=150;
    console.log(this.child.count );
    this.child.menuText = "Contact Us";
    console.log(this.child.menuText );
    console.log("ngafter");
  }

  increment() {
    this.child.increment();
  }
 
  decrement() {
    this.child.decrement();
  }


}
