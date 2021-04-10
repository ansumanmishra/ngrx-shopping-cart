import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {UserActions} from './actions';

export interface User {
  id: string;
  name: string;
}

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

/* Selectors */

const getUserFeatureState = createFeatureSelector<UserState>('users');
export const getUsers = createSelector(
  getUserFeatureState,
  state => state.users,
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.loadUsers, (state): UserState => {
    return {
      ...state,
      users: [{id: '1', name: 'Ansuman'}],
    };
  }),
);
