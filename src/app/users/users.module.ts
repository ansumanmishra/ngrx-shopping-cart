import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListUsersComponent} from './list-users/list-users.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ListUserItemComponent} from './list-user-item/list-user-item.component';
import {StoreModule} from '@ngrx/store';
import {userReducer} from './state/user.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './state/user.effects';


@NgModule({
  declarations: [
    ListUsersComponent,
    AddUserComponent,
    ListUserItemComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  exports: [ListUsersComponent,
    AddUserComponent,
    ListUserItemComponent]
})
export class UsersModule {
}
