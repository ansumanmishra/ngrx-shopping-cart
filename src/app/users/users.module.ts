import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListUsersComponent} from './list-users/list-users.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ListUserItemComponent} from './list-user-item/list-user-item.component';
import {StoreModule} from '@ngrx/store';
import {userReducer} from './state/user.reducer';


@NgModule({
  declarations: [
    ListUsersComponent,
    AddUserComponent,
    ListUserItemComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', userReducer)
  ],
  exports: [ListUsersComponent,
    AddUserComponent,
    ListUserItemComponent]
})
export class UsersModule {
}
