import { Component, OnInit } from '@angular/core';
import { DiceRollingService } from '../dice-rolling.service';

@Component({
  selector: 'app-roll-history',
  templateUrl: './roll-history.component.html',
  styleUrl: './roll-history.component.css'
})
export class RollHistoryComponent implements OnInit {

  constructor(
    public diceRollingSvc: DiceRollingService
  ) {}

  ngOnInit(): void {
      
  }
}
