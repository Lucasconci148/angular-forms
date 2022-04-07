import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public userForm: FormGroup;
  constructor (private form: FormBuilder) {
    this.userForm = this.form.group({
      name: ['', Validators.required],
      age: ['', Validators.compose([Validators.required, Validators.max(180)])],
      company: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      //used a custom pattern to verify email input since Validators.email has anomalous behaviors
    })
  }

  sendForm() {
    console.log(this.userForm.value)
  }
}
