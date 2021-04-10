import {createAction, props} from '@ngrx/store';
import {User} from '../../user';

export const loadUsers = createAction(
  '[User API] Load Users',
);

export const loadUsersSuccess = createAction(
  '[User API] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User API] Load Users Failure',
  props<{ error: string }>()
);

export const selectUser = createAction(
  '[User] Select User',
  props<{ userId: number }>()
);


