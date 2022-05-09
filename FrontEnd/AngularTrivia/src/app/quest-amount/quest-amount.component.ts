import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest-amount',
  templateUrl: './quest-amount.component.html',
  styleUrls: ['./quest-amount.component.scss']
})
export class QuestAmountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  startGame(amount: any){
    localStorage.setItem("idAmount", amount);
  }
}
