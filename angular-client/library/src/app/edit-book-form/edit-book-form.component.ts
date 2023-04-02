import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { Book } from '../types';
import { AppDataService } from '../app-data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.css'],
})
export class EditBookFormComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private apiClient: ApiClientService,
    private data: AppDataService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  book!: any;
  hasBook?: boolean;

  ngOnInit(): void {
    const bookId = this.data.bookId;
    if (bookId) {
      this.hasBook = true;
      this.apiClient.getOneBook(bookId).subscribe((res) => {
        this.book = res;
        this.populateBookForm();
      });
      this.data.bookId = undefined;
    }

    this.bookform.valueChanges.subscribe(() => {});
  }

  bookform = this.formBuilder.group({
    title: ['', [Validators.required]],
    author: '',
    summary: '',
  });

  populateBookForm() {
    this.bookform.controls['title'].setValue(this.book.title);
    this.bookform.controls['author'].setValue(this.book.author);
    this.bookform.controls['summary'].setValue(this.book.summary);
  }

  handleSubmit() {
    const bookToAdd: any = this.bookform.value;
    if (this.hasBook) {
      this.apiClient
        .updateOneBook(this.book._id, bookToAdd)
        .subscribe(() => this.goBack());
    } else {
      this.apiClient.addOneBook(bookToAdd).subscribe(() => this.goHome());
    }
  }

  goBack() {
    this.bookform.reset();
    this.router.navigateByUrl(`/books/${this.book._id}`);
  }

  goHome() {
    this.bookform.reset();
    this.router.navigate(['/books']);
  }
}
