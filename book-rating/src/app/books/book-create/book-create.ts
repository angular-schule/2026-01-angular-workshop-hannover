import { Component, signal } from '@angular/core';
import { Book } from '../shared/book';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-book-create',
  imports: [],
  templateUrl: './book-create.html',
  styleUrl: './book-create.scss',
})
export class BookCreate {

  readonly #formData = signal<Book>({
    isbn: '',
    title: '',
    description: '',
    rating: 1
  });

  protected readonly bookForm = form(this.#formData);
}
