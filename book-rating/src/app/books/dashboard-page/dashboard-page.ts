import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookCard } from "../book-card/book-card";
import { BookRatingHelper } from '../shared/book-rating-helper';
import { BookCreate } from "../book-create/book-create";
import { BookStore } from '../shared/book-store';

@Component({
  selector: 'app-dashboard-page',
  imports: [BookCard, BookCreate],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // weniger Prüfungen als vorher
})
export class DashboardPage {

  bookRatingHelper = inject(BookRatingHelper);
  bookStore = inject(BookStore);

  // 🦆
  readonly books = signal<Book[]>([]);

  constructor() {
    this.bookStore.getBooks().subscribe(b => this.books.set(b));
  }

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
