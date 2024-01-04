import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { users } from '../../../db/users.json';
import { User } from '../../interfaces/Users.interface';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  public usersList: User[] = users;
}
