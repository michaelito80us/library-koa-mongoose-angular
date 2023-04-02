import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookFormComponent } from './edit-book-form/edit-book-form.component';

const routes: Routes = [
  { path: 'books', component: DashboardComponent },
  { path: 'books/form', component: EditBookFormComponent },
  { path: 'books/:bookId', component: BookDetailsComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
