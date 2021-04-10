import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserActions} from '../state/actions';
import {Observable} from 'rxjs';
import {getSelectedtUser, getUsers} from '../state/user.reducer';
import {User} from '../user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser$: Observable<User>;

  constructor(private readonly store: Store) {
    this.store.dispatch(UserActions.loadUsers());
  }

  ngOnInit(): void {
    this.users$ = this.store.select(getUsers);
    this.selectedUser$ = this.store.select(getSelectedtUser);
  }

  selectUser(user: User): void {
    this.store.dispatch(UserActions.selectUser({userId: user.id}));
  }
}
