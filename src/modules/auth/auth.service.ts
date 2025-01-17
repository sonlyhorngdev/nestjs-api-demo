import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async login(user: User): Promise<{ accessToken: string }> {
    const payload = { username: user.username, sub: user.id };
    const accessToken = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });
    return { accessToken };
  }
}
