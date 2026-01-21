import { httpResource } from '@angular/common/http';
import { Component, effect, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-details-page',
  imports: [RouterLink],
  templateUrl: './book-details-page.html',
  styleUrl: './book-details-page.scss',
})
export class BookDetailsPage {

  readonly isbn = input.required<string>();
  readonly book = httpResource<Book>(
    () => `https://api.angular.schule/books/${this.isbn()}`
  );

  constructor() {
    effect(() => console.log('Die ISBN lautet', this.isbn()))
  }
}
