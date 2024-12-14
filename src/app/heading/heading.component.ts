import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  @Input() text:string[]=[]
  ngOnInit(): void {
    this.text.push('WELCOME')
    console.log("ngOnInit called!!");
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnchanges called!",
      changes ['text'].currentValue);
    
  }
   
  ngDoCheck(): void {
    console.log("ngDocheck called!!!");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called!!!!");
  }
}
