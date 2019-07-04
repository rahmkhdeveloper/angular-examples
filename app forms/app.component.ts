import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //model
  /*myForm = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('' , Validators.required)
    })
  });*/

  @ViewChild('myForm') myForm;
  
  onSubmit() {
    if(this.myForm.valid) {
      console.log(this.myForm.value);
      this.myForm.reset();
    }
  }
}
