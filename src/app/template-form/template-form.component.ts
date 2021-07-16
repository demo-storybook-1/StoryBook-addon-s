import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  mycomments: any = "";
  yourname: any = "";
  country: any = "";
  sendNewsLetter: any = "";

  countries = [
    { value: "IN", text: "India" },
    { value: "USA", text: "United States of America" },
    { value: "UK", text: "United Kingdom" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  submit(form: any) {
    console.log(form.value);
  }

}
