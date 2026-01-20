import { Component, signal } from '@angular/core';
import { Book } from '../shared/book';
import { disabled, form, hidden, max, maxLength, min, minLength, readonly, required, schema, validate, Field, FormField, provideSignalFormsConfig } from '@angular/forms/signals';

@Component({
  selector: 'app-book-create',
  imports: [FormField],
  templateUrl: './book-create.html',
  styleUrl: './book-create.scss',
  providers: [
    provideSignalFormsConfig({
      classes: {
        'valid': ({ state }) => state().valid() && state().touched(),
        'invalid': ({ state }) => state().invalid() && state().touched(),
      }
    })
  ]
})
export class BookCreate {

  readonly #formData = signal<Book>({
    isbn: '',
    title: '',
    description: '',
    rating: 1
  });

  protected readonly bookForm = form(this.#formData, schema(path => {

    required(path.isbn, { message: 'Die ISBN muss angegeben werden.' });
    required(path.title, { message: 'Der Titel muss angegeben werden.' });
    required(path.rating, { message: 'Die Bewertung muss angegeben werden.' });

    minLength(path.isbn, 8, { message: 'Die ISBN muss min. 8 Zeichen lang sein.' });
    maxLength(path.isbn, 15, { message: 'Die ISBN darf max. 15 Zeichen lang sein.' });

    min(path.rating, 1, { message: 'Die Bewertung muss min. 1 sein.' });
    max(path.rating, 5, { message: 'Die Bewertung muss max. 5 sein.' });

    validate(path.isbn, ctx => {
      if (!ctx.value().startsWith('978')) {
        return {
          kind: 'isbnPrefix',
          message: 'Eine ISBN muss mit 978 beginnen.'
        }
      }
      return undefined;
    });
  }));
}
