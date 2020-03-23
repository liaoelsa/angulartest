import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-test',
  templateUrl: './dynamic-test.component.html',
  styleUrls: ['./dynamic-test.component.scss']
})
export class DynamicTestComponent implements OnInit {
  private searchData:boolean = false

  constructor() { }

  ngOnInit() {
  }

}
