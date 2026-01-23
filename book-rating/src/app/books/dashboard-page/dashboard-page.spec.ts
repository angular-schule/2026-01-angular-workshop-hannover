import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Mock } from 'vitest';

import { DashboardPage } from './dashboard-page';
import { BookRatingHelper } from '../shared/book-rating-helper';
import { Book } from '../shared/book';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;
  let rateUpFn: Mock;

  beforeEach(async () => {
    rateUpFn = vi.fn();
    const bookRatingHelperMock = { rateUp: rateUpFn };

    await TestBed.configureTestingModule({
      imports: [DashboardPage],
      providers: [
        provideRouter([]),
        { provide: BookRatingHelper, useValue: bookRatingHelperMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should call rateUp', () => {
    const testBook = {} as Book;
    rateUpFn.mockReturnValue(testBook);

    component.doRateUp(testBook);

    expect(rateUpFn).toHaveBeenCalledExactlyOnceWith(testBook);
  });
});
