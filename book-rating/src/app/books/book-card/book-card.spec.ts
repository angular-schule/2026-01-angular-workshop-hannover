import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BookCard } from './book-card';
import { inputBinding } from '@angular/core';
import { Book } from '../shared/book';

describe('BookCard', () => {
  let component: BookCard;
  let fixture: ComponentFixture<BookCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCard],
      providers: [provideRouter([])]
    })
    .compileComponents();

    const book: Book = {
      isbn: '000',
      title: '',
      description: '',
      rating: 1
    }

    fixture = TestBed.createComponent(BookCard, {
      bindings: [
        inputBinding('book', () => book)
      ]
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
