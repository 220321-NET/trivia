import { Component, OnInit } from '@angular/core';
import { DailyQuestionService } from '../service/daily-question.service';
import { interval } from 'rxjs';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { decodeEntity } from 'html-entities';

@Component({
  selector: 'app-questions',
  templateUrl: './daily-question.component.html',
  styleUrls: ['./daily-question.component.scss']
})
export class DailyQuestionComponent implements OnInit {

  public name: string = "";
  public questionListRand: any = [];

  public dailyQuest: Daily = new Daily();

  private setCounter: number = 30;
  counter = this.setCounter;
  public intervals: any;
  isGameOver : boolean = false;
  public result: string = "Better luck next time!";
  public correctAns : string = "";
  constructor(private dailyQuestionService: DailyQuestionService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.startCounter();
  }

  getQuestionNew() {
    this.dailyQuestionService.getDaily().subscribe((data: Daily[]) => {
      this.dailyQuest.Question = data[0].Question;
      this.dailyQuest.Ans = data[0].Ans;
      this.dailyQuest.NotAns1 = data[0].NotAns1;
      this.dailyQuest.NotAns2 = data[0].NotAns2;
      this.dailyQuest.NotAns3 = data[0].NotAns3;
      console.log(`${this.dailyQuest.Ans}`);
      this.questionListRand.push(this.dailyQuest.Ans, this.dailyQuest.NotAns1, this.dailyQuest.NotAns2, this.dailyQuest.NotAns3,);
      this.questionListRand = this.randomArrayShuffle(this.questionListRand);
      this.dailyQuest.Question = this.dailyQuest.Question.replaceAll("&quot;", `"`);
      console.log(`${this.dailyQuest.Question}`);
      console.log(this.questionListRand);
    })
  }

  public getDecoded(value: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  answer(choice: string) {
    if (this.dailyQuest.Ans === choice) this.result = "Congrats! You got today's daily question correct!";

    this.correctAns = `The correct answer was: ${this.dailyQuest.Ans}`;

    this.stopCounter();
  }

  startCounter() {
    this.intervals = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.isGameOver = true;
          this.stopCounter();
          this.result = "Oh no! You ran out of time, better luck next time."
        }
      });
    setTimeout(() => {
      this.intervals.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.intervals.unsubscribe();
    this.counter = 0;
    this.isGameOver = true;

  }

  randomArrayShuffle(array:any) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

}
