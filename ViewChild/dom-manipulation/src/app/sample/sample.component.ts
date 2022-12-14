import { Component, OnInit,AfterViewInit, ViewChild,TemplateRef } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
  <ng-template #tpl>
      <span>I am span in template</span>
  </ng-template>`
})
export class SampleComponent implements OnInit,AfterViewInit {
  @ViewChild("tpl") tpl: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
        let elementRef = this.tpl.elementRef;
        // outputs `template bindings={}`
        console.log(elementRef.nativeElement.textContent);
  }
}
