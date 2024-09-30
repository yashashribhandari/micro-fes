import { Injectable } from '@nestjs/common';
import users, { User } from '../users';

@Injectable()
export class UsersService {
  private readonly users = users;

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
