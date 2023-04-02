import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../types';
import { ApiClientService } from '../api-client.service';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private apiClient: ApiClientService,
    private router: Router,
    private data: AppDataService
  ) {}

  book!: Book;

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      const bookId = this.route.snapshot.paramMap.get('bookId');
      if (bookId) {
        this.apiClient.getOneBook(bookId).subscribe((res) => (this.book = res));
      }
    });
  }

  editBook() {
    this.data.bookId = this.book._id;
    this.router.navigateByUrl('/books/form');
  }

  deleteBook() {
    if (this.book._id)
      this.apiClient.deleteOneBook(this.book._id).subscribe(() => {});
    this.router.navigateByUrl('/');
  }
}
