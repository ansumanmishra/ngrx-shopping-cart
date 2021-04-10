import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {UserActions} from './actions';
import {User} from '../user';

export interface UserState {
  users: User[];
  selectedUser: number;
}

const initialState: UserState = {
  users: [],
  selectedUser: undefined,
};

/* Selectors */
const getUserFeatureState = createFeatureSelector<UserState>('users');
export const getUsers = createSelector(
  getUserFeatureState,
  state => state.users,
);

export const getSelectedtUser = createSelector(
  getUserFeatureState,
  getUsers,
  (state, users) => users.find(user => user.id === state.selectedUser),
);

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.loadUsersSuccess, (state, {users}): UserState => {
    return {
      ...state,
      users,
    };
  }),
  on(UserActions.selectUser, (state, {userId}): UserState => {
    return {
      ...state,
      selectedUser: userId,
    };
  }),
);
