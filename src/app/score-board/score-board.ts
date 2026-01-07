import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importing FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './score-board.html',
  styleUrls: ['./score-board.css']
})
export class ScoreBoardComponent {
  // Initial Properties
  overs: number = 5;
  balls: number = 30;
  wickets: number = 10;
  target: number = 0;
  currentRuns: number = 0;
  need: number = 0;

  // Update 'Need' immediately when target changes via (ngModelChange)
  updateNeed() {
    this.need = this.target - this.currentRuns;
  }

  handleRunClick(runs: number) {
    // Check if target is set
    if (this.target <= 0) {
      alert("Please set the target first!");
      return;
    }

    // Update Runs and Need
    this.currentRuns += runs;
    this.balls -= 1;
    this.updateNeed();

    // Over logic: Reduce over every 6 balls
    if (this.balls % 6 === 0 && this.overs > 0) {
      this.overs -= 1;
    }

    // Wicket logic: Wicket falls if current runs are divisible by 3
    if (this.currentRuns > 0 && this.currentRuns % 3 === 0) {
      this.wickets -= 1;
    }

    this.checkGameStatus();
  }

  checkGameStatus() {
    if (this.need <= 0 && this.balls >= 0 && this.wickets > 0) {
      alert("Match Won! 🎉");
      this.resetGame();
    } 
    else if (this.balls <= 0 || this.wickets <= 0) {
      if (this.need > 0) {
        alert("Match Lost! ❌");
        this.resetGame();
      }
    }
  }

  resetGame() {
    this.overs = 0;
    this.balls = 0;
    this.wickets = 0;
    this.target = 0;
    this.currentRuns = 0;
    this.need = 0;
  }
}
