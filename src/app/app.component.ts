import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angularDSMLibrary';
  comments = "";
  description = "";
  mycomments = "";
  mydescription = "";
  firstName = "";
  selectItem = "";
  selectCountry = "";
  selectMItem = "";
  getAlert = "";
  fruit = "";
  selected_alert = "";
  selected_fruit = "";
  isFruit = true;
  isCheckedDisabled = true;
  cityLists = "";
  password = "";
  emailid = "";
  onoff = "";
  switchone = "";

  @ViewChild('fruittype', { static: false }) fruitCheckBox: any;

  countries = [
    { value: "IN", text: "India" },
    { value: "USA", text: "United States of America" },
    { value: "UK", text: "United Kingdom" },
    { value: "HOL", text: "Holand" },
    { value: "SWE", text: "Sweden" },
    { value: "CAN", text: "Canada" },
    { value: "MEX", text: "Mexico" },
    { value: "FRA", text: "France" },
    { value: "BEL", text: "Belgium" },
    { value: "JPN", text: "Japan" },
    { value: "AUS", text: "Australia" }

  ]

  onClickEventReceived($event) {
    alert($event.target.outerText + " Button Click!!");
  }

  onChangeAlertsEventReceived($event) {
    if ($event.target.checked) {
      this.selected_alert = $event.target.value;
    }
    else {
      this.selected_alert = "";
    }
  }

  onChangeFruitsEventReceived($event) {
    if ($event.target.checked) {
      this.selected_fruit = $event.target.value;
    }
    else {
      this.selected_fruit = "";
    }
  }

  onToggle($event) {
    if ($event.target.checked) {
      this.onoff = $event.target.value;
    }
    else {
      this.onoff = "";
    }
  }

  onToggleGender($event) {
    if ($event.target.checked) {
      this.switchone = $event.target.labels[0].innerHTML;
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.fruitCheckBox.mCheckBox.nativeElement.checked) {
      this.selected_fruit = this.fruitCheckBox.mCheckBox.nativeElement.value;
      this.fruit = "true";
    }

  }

  onRadioOptionSelected($event) {
    console.log($event.target.outerText, "Radio Option Selected!!", $event);
  }

  onRadioGroupOptionSelected($event) {
    console.log($event.target.outerText, "Radio Group Option Selected!!", $event);
  }
}
