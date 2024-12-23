import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Get all users
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // Create a new user
  @Post()
  async create(@Body() userData: { email: string; name: string; password: string }): Promise<User> {
    return this.userService.create(userData);
  }
}
