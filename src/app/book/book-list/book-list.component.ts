import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Array<Book> = [];

  constructor(private bookService: BookService) { }

  getBooks():void {
    this.bookService.getBooks().subscribe(data=> {
      this.books = data;
    })
  }

  ngOnInit() {
    this.getBooks();
  }
}
