import { Component, signal } from '@angular/core';
import { Book } from '../shared/book';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-book-create-page',
  imports: [],
  templateUrl: './book-create-page.html',
  styleUrl: './book-create-page.scss',
})
export class BookCreatePage {

  readonly #formData = signal<Book>({
    isbn: '',
    title: '',
    description: '',
    rating: 1
  });

  protected readonly bookForm = form(this.#formData);
}
