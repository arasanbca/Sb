import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component  {

  contactform = new FormGroup({
    FN: new FormControl("KING"),
    lastname: new FormControl("ARTHUR"),
    email: new FormControl(),
    Gr: new FormControl(),
    IM: new FormControl(),
    Cn: new FormControl(),
    address: new FormGroup({
      dr: new FormControl(),
      st: new FormControl(),
      cy: new FormControl(),
    })
  })

  get f1(){
    return this.contactform.get('FN')
  }
  onsubmit(){
    console.log(this.contactform.value);
    
  }

}
