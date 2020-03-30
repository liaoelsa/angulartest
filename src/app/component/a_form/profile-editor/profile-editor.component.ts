import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  },
  {validators:Validators.required})

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.dir(this.profileForm)
  }

  onSubmit(){
    console.warn(this.profileForm.value)
  }
}
