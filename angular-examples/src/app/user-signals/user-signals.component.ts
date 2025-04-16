import { httpResource } from '@angular/common/http';
import { Component, computed, model, signal } from '@angular/core';
import { User } from '../user';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-signals',
  imports: [ReactiveFormsModule],
  styleUrl: './user-signals.component.css',
  template: `
    <section>
        <h2>Signals</h2>
        <input type="text" [formControl]="searchInput"/>
        <p>{{ usersName() }}</p>
    </section>
    `
})
export class UserSignalsComponent {
  searchInput = new FormControl('', { nonNullable: true });

  // Dit is nog nodig omdat signal based forms nog niet bestaan
  searchInputSignal = toSignal(this.searchInput.valueChanges)
  users = httpResource<User[] | null>(() => `http://localhost:3000/users?firstName=${this.searchInputSignal()}` , {defaultValue: null})

  usersName = computed(() => {
    const firstUser = this.users.value();
    if(firstUser && firstUser[0]){
      return `${firstUser[0].firstName} ${firstUser[0].lastName}`;
    }
    return "";
  });
}
