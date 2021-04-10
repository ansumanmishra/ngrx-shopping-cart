import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-list-user-item',
  templateUrl: './list-user-item.component.html',
  styleUrls: ['./list-user-item.component.css']
})
export class ListUserItemComponent implements OnInit {

  @Input() user: User;
  @Output() selectedUser: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  selectUser(user: User): void {
    this.selectedUser.emit(user);
  }
}
