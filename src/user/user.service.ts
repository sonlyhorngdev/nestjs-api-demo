import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User' },
    { id: 4, name: 'David', email: 'david@example.com', role: 'Moderator' },
    { id: 5, name: 'Eve', email: 'eve@example.com', role: 'User' },
  ];

  getAllUsers(): User[] {
    return this.users;
  }
}
