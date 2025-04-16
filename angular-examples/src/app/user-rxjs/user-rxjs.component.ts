import { Component, inject, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, of, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-user-rxjs',
  imports: [AsyncPipe, ReactiveFormsModule],
  styleUrl: './user-rxjs.component.css',
  template: `
    <section>
      <h2>Rxjs</h2>
      <input type="text" [formControl]="searchInput"/>
      <p>{{ usersName$ | async }}</p>
    </section>
    `
})
export class UserRxjsComponent {
  httpClient = inject(HttpClient);

  searchInput = new FormControl('', { nonNullable: true });
  user$ = this.searchInput.valueChanges.pipe(
    debounceTime(300),
    switchMap(searchTerm => this.getUserByName(searchTerm))
  );

  usersName$ = this.user$.pipe(
    map(user => `${user.firstName} ${user.lastName}`)
  )

  getUserByName(name: string): Observable<User> {
    return this.httpClient.get<User[]>(`http://localhost:3000/users?firstName=${name}`).pipe(
      map(users => users[0]))
  }
}
