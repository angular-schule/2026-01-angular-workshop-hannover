import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  imports: [],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // weniger Prüfungen als vorher
})
export class DashboardPage {

  readonly books = signal(['Angular', 'jQuery', 'React']);

  constructor() {
    setTimeout(() => this.books.update(x => {
      const newX = [...x];
      newX[1] = 'Vuejs';
      return newX;
    }), 2000)
  }

}
