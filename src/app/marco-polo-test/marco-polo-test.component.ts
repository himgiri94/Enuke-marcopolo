import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marco-polo-test',
  templateUrl: './marco-polo-test.component.html',
  styleUrls: ['./marco-polo-test.component.css']
})
export class MarcoPoloTestComponent implements OnInit {

  public marco = [];
  public output;

  constructor() { }

  ngOnInit() {
    this.output = this.marcopolo(100);
  }

  public marcopolo(number) {

    for (var i = 1; i <= number; i++) {
      if( i % 4 === 0 ) {
        if ( i % 7 === 0) {
          this.marco.push('marcopolo');
        } else {
          this.marco.push('marco');
        }
      } else if ( i % 7 === 0) {
        this.marco.push('polo');
      } else {
        this.marco.push(i);
      }
    }
    return this.marco.toString();
  }
}
