import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class TestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
