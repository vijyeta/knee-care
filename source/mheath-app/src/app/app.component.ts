import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  availableOrUnavailable = 'I am available';
  checked = true;
  manage = true;
  dayAfterTomorrow: string
  slots = [
    { viewValue: '10:00 am', selected: true },
    { viewValue: '10:30 am', selected: true },
    { viewValue: '11:00 am', selected: true },
    { viewValue: '11:30 am ', selected: true },
    { viewValue: '12:00 pm', selected: true },
    { viewValue: '12:30 pm', selected: true },
    { viewValue: '1:00 pm', selected: true },
    { viewValue: '1:30 pm', selected: true },
    { viewValue: '2:00 pm', selected: true },
    { viewValue: '2:30 pm', selected: true },
    { viewValue: '3:00 pm', selected: true },
    { viewValue: '3:30 pm', selected: true },
    { viewValue: '4:00 pm', selected: true },
    { viewValue: '4:30 pm', selected: false },
    { viewValue: '5:00 pm', selected: false },
    { viewValue: '5:30 pm', selected: false },
    { viewValue: '6:00 pm', selected: false },];
  daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  availabilityForm: FormGroup;
  constructor(private fb: FormBuilder, private snackbar: MatSnackBar,) {
    this.availabilityForm = this.fb.group({
      from: this.fb.array([]),
      till: this.fb.array([])
    })
  }

  changed() {
    this.checked = !this.checked;
    if (this.checked === true) {
      this.availableOrUnavailable = 'I am available';
    }
    else {
      this.availableOrUnavailable = 'I am unavailable';
    }
  }

  calendarClick() {
    this.manage = false;
  }

  back() {
    this.manage = true;
  }

  trackByFn(index) {
    return index;
  }

  ngOnInit() {
    this.add();
    const today = new Date();
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
    this.dayAfterTomorrow = String(dayAfterTomorrow.getDate()) + ' ' + this.months[dayAfterTomorrow.getMonth()];
  }

  add() {
    const array = this.availabilityForm.controls.from as FormArray;
    array.push(
      this.fb.group({
        from: "",
      })
    );
    const array2 = this.availabilityForm.controls.till as FormArray;
    array2.push(
      this.fb.group({
        till: "",
      })
    );
  }

  clearFormArray = (formArray: FormArray, index) => {
    formArray.removeAt(index);
  };

  delete(j) {
    // this.clearFormArray(this.availabilityForm.controls.from as FormArray, j);
    // this.clearFormArray(this.availabilityForm.controls.till as FormArray, j);
  }

  save(){
    // this.snackbar.open("Submitted successfully!", "Dismiss", {
    //   duration: 3000,
    //   panelClass: "success-snackbar",
    // });
  }
}

