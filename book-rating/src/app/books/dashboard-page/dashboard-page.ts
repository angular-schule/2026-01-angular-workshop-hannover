import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Book } from '../shared/book';
import { JsonPipe } from '@angular/common';
import { BookCard } from "../book-card/book-card";

@Component({
  selector: 'app-dashboard-page',
  imports: [JsonPipe, BookCard],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // weniger Prüfungen als vorher
})
export class DashboardPage {

  // 🦆
  readonly books = signal<Book[]>([
    {
      isbn: '000',
      title: 'Angular, 1. Auflage (2016)',
      description: 'Tooles Buch',
      rating: 5
    },
    {
      isbn: '111',
      title: 'jQuery',
      description: 'Altes Buch',
      rating: 3
    },
    {
      isbn: '222',
      title: 'React',
      description: 'Wollma nicht',
      rating: 1
    },
  ]);
}
