import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserService} from '../user.service';
import {UserActions} from './actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private readonly actions$: Actions, private readonly userService: UserService) {
  }

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() => this.userService.getUsers()
        .pipe(
          map((res: any) => UserActions.loadUsersSuccess({users: res.data})),
          catchError(error => of(UserActions.loadUsersFailure({ error })))
        )
      )
    );
  });
}
