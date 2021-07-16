import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  mydescription: any = "";
  companyName: any = "";
  countrylists: any = "";
  myName: any = "";
  termsConditions: any = "";

  countries = [
    { value: "IN", text: "India" },
    { value: "USA", text: "United States of America" },
    { value: "UK", text: "United Kingdom" }
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      companyName: ['', [Validators.required]],
      myName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      countrylists: ['', [Validators.required]],
      mydescription: ['', [Validators.required]],
      termsConditions: ['', [Validators.required]]
    })
  }

  get f() { return this.userForm.controls; }

  isValidInput(fieldName): boolean {
    return this.userForm.controls[fieldName].invalid && this.userForm.controls[fieldName].touched;
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    // display form values on success
    console.log(JSON.stringify(this.userForm.value, null, 4));
  }

}
