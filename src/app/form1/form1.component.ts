import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  
  countrylist:country [] = [
    new country('1','India'),
    new country('2','USA'),
    new country('3','Australia')
  ];

  onSubmit(form1:NgForm){
    console.log(form1.value);
    
  }
  constructor() { }
  details!:Detail;
  ngOnInit(): void {
    this.details={
      firstname:"ARASAN",
      lastname:"Aran",
      email:"asdfg@gmail.com",
      gender:"male",
      ismarried:true,
      country:"1",
      address:{
        doorno:"52",
        street:"Meyyanur",
        city:"salem"
      }
    }
  }

}

class country{
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id = id;
    this.name = name
  }
}

class Detail{
  firstname!:string;
  lastname!:string;
  email!:string;
  gender!:string;
  ismarried!:boolean;
  country!:string;
  address!:{
    doorno:string;
    street:string;
    city:string;
  }
}
