import { Component, Input } from '@angular/core';
import { Book } from '../types';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  @Input()
  book!: Book;

  bookUrl() {
    return `/books/${this.book._id}`;
  }
}
