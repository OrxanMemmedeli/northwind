import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  currentUser: User | null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUserClass(user: User) {
    if (this.currentUser == user) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  setAllUser() {
    this.currentUser = null;
  }

  getAllUserClass() {
    if (!this.currentUser) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
