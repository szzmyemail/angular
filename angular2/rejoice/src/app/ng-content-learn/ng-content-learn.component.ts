import { Component, ContentChild, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-content-learn',
  templateUrl: './ng-content-learn.component.html',
  styleUrls: ['./ng-content-learn.component.scss']
})
export class NgContentLearnComponent implements OnInit {
 
  @ContentChild('default') childa: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log(333111)
    console.log(this.childa)
  }

}
