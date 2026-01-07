import { Component } from '@angular/core';
import { ScoreBoardComponent } from './score-board/score-board';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScoreBoardComponent],
  template: `
    <div class="container text-center py-5">
      <h1 class="display-4 fw-bold text-uppercase border-bottom pb-3 mb-5">
        Cricket Score Monitoring App 🏏
      </h1>
      <app-score-board></app-score-board>
    </div>
  `,
  styles: [`
    h1 { color: #2c3e50; text-shadow: 2px 2px 4px rgba(0,0,0,0.1); }
  `]
})
export class AppComponent {}