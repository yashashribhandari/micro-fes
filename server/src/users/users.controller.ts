import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

import users, { User } from '../users';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(): Promise<User[]> {
    return users;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async show(@Param('id') id: string): Promise<User> {
    return users.find((user) => user.userId === parseInt(id));
  }
}
