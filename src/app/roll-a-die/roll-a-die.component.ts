import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-roll-a-die',
  templateUrl: './roll-a-die.component.html',
  styleUrl: './roll-a-die.component.css'
})
export class RollADieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {   
  }

  rollResult = 0;

  roll = () => {
    this.rollResult = Math.floor(Math.random() * Number(this.sideCount)) + 1;
    this.dieRolled.emit({
      sides: this.sideCount,
      result: this.rollResult
    });
  };

  @Input("side-count")
  sideCount = "";

  @Output("die-rolled")
  dieRolled = new EventEmitter<any>();
}
