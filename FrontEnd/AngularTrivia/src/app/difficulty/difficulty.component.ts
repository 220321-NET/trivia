import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.scss']
})
export class DifficultyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  startGame(difficulty: any){
    localStorage.setItem("idDifficulty", difficulty);
  }
}
