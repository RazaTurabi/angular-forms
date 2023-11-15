import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  userForm = new FormGroup(
    {
      name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      email:new FormControl("",[Validators.required,Validators.minLength(11),Validators.maxLength(25)]),
      city:new FormControl(),
      gender:new FormControl()
    }
  )

  reactive_form_data() {
   console.log(this.userForm.value); 
  }                      

  get name():FormControl
  {
    return this.userForm.get("name") as FormControl
  }

  get email():FormControl
  {
    return this.userForm.get("email") as FormControl
  }
   
  get city():FormControl
  {
    return this.userForm.get("city") as FormControl
  }

  get gender():FormControl
  {
    return this.userForm.get("gender") as FormControl
  }











}
