import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   public form!: FormGroup;

   constructor(private fb: FormBuilder) {}

   ngOnInit(): void {
       this.form = this.fb.group({
         name: ['', Validators.required],
         age: ['', [Validators.required, Validators.max(180), this.onlyNumber()]],
         company: ['', Validators.required],
         mail: ['', [Validators.required, Validators.email]]
       });
   }

   sendForm(): void {
      console.log(this.form.value);
   }

   onlyNumber(): ValidatorFn {
      return (control: AbstractControl): { [key: string]: boolean } | null => {
         if (!control.value) return null;

         const value = parseInt(control.value);
         if (isNaN(value)) {
            return { 'notANumber': true }
         } else {
            return null
         }
      }
   }
}
