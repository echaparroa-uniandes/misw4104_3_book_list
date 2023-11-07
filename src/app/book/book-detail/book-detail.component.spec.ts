/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { BookDetailComponent } from './book-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Editorial } from 'src/app/editorial/editorial';
import { BookDetail } from '../book-detail';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ BookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    
    const editorial = new Editorial(
      faker.datatype.number(),
      faker.lorem.sentence()
    );
 
    const book = new BookDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      faker.date.past(),
      editorial,
      [],
      []
    );
    component.bookDetail = book;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
