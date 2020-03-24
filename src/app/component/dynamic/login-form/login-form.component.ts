import { Component, OnInit, Output, EventEmitter, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public user:any = {
    email: "",
    userName: "",
    pwd:""
  }

  @Output() submitted:EventEmitter<any>=new EventEmitter<any>()

  private showMessage:boolean = false

  // @ContentChild(AuthRememberComponent,{static:true}) remember: AuthRememberComponent

  @ContentChildren(AuthRememberComponent, {descendants:true}) remember: QueryList<AuthRememberComponent>

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value){
    this.submitted.emit(value)
  }

  ngAfterContentInit(){
    if(this.remember){
      // this.remember.checked.subscribe((checked:boolean) => {
      //   this.showMessage = checked
      // })
      this.remember.forEach((item:AuthRememberComponent) => {
        item.checked.subscribe((checked:boolean) => {
          this.showMessage = checked
        })
      })
    }
  }

}
