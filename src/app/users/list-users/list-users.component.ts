import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserActions} from '../state/actions';
import {Observable} from 'rxjs';
import {getUsers, User} from '../state/user.reducer';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private readonly store: Store) {
    this.store.dispatch(UserActions.loadUsers());
  }

  ngOnInit(): void {
    this.users$ = this.store.select(getUsers);
  }

}
