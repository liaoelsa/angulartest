import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  public message:any="<h3>this is a html</h3>"
  public picUrl:string = 'https://www.baidu.com/img/pc_1c6e30772d5e4103103bd460913332f9.png';
  private testArray: any

  constructor() { }

  ngOnInit() {
  }

  buttonClick(){
    this.testArray = ["test"]
    console.log(this.testArray.length)
  }

}
