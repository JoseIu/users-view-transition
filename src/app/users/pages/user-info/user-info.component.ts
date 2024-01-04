import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users } from '../../../db/users.json';
import { User } from '../../interfaces/Users.interface';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
  private route = inject(ActivatedRoute);

  public user = signal<User | undefined>(undefined);
  public userID = signal<number | undefined>(undefined);

  constructor() {
    this.route.params.subscribe(({ id }) => this.userID.set(parseInt(id)));

    const userFinded = users.find((user) => user.id === this.userID());

    this.user.set(userFinded);
  }
}
