import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection-test',
  templateUrl: './content-projection-test.component.html',
  styleUrls: ['./content-projection-test.component.scss']
})
export class ContentProjectionTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogin($event){
    console.log("login")
    // console.dir(event)
  }

  onRegister($event){
    console.log("register")
    // console.dir(event)
  }

}
