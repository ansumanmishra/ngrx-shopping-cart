import {Component, Input, OnInit} from '@angular/core';
import {User} from '../state/user.reducer';

@Component({
  selector: 'app-list-user-item',
  templateUrl: './list-user-item.component.html',
  styleUrls: ['./list-user-item.component.css']
})
export class ListUserItemComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
