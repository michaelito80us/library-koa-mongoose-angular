import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from '../types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private apiClient: ApiClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  books?: Book[];

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.getAllBooks();
    });
  }

  getAllBooks() {
    this.apiClient.getAllBooks().subscribe((res) => {
      this.books = res;
    });
  }

  addBook() {
    this.router.navigateByUrl('/books/form');
  }
}
