import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UsersService {
  //private readonly users: any[];

  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ){}

  findUserByUsername(username: string) {
    return this.userRepo.findOne({
      where: { username }
    });
  }
}