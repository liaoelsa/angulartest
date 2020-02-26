import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public userInfo:any = {
    userName: 'elsa',
    sex: '1',
    city: '北京',
    hobby: [
      {
        tytle:'吃饭',
        value:false
      },
      {
        tytle:'睡觉',
        value:false
      },
      {
        tytle:'敲代码',
        value:false
      }
    ],
    mark: ''
  }
  private cityList: any = ['北京','深圳','上海','成都']

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(){
    //use dom to get value(jquery)
    // let userName:any = document.getElementById("userName")
    // console.log(userName.value)

    console.log(this.userInfo)
  }

}
