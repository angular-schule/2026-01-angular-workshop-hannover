import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookCard } from "../book-card/book-card";
import { BookRatingHelper } from '../shared/book-rating-helper';
import { BookCreate } from "../book-create/book-create";

@Component({
  selector: 'app-dashboard-page',
  imports: [BookCard, BookCreate],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // weniger Prüfungen als vorher
})
export class DashboardPage {

  bookRatingHelper = inject(BookRatingHelper);

  // 🦆
  readonly books = signal<Book[]>([
    {
      isbn: '000',
      title: 'Angular, 1. Auflage (2026)',
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

  doRateUp(book: Book) {
    const ratedBook = this.bookRatingHelper.rateUp(book);

    // const ratedBook = {
    //   ...book,
    //   rating: Math.min(book.rating + 1, 5)
    // }

    this.updateAndSortBooks(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.bookRatingHelper.rateDown(book);
    this.updateAndSortBooks(ratedBook);
  }

  updateAndSortBooks(ratedBook: Book) {
    this.books.update(books => books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook :b)
      .sort((a, b) => b.rating - a.rating));
  }

  addBook(book: Book) {
    this.books.update(books => [...books, book]
      .sort((a, b) => b.rating - a.rating)
    )
  }
}
