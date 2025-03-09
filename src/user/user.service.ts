import { Injectable } from '@nestjs/common';
import { type UserEntity } from 'src/user/user.interfaces';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(userToCreate: Omit<UserEntity, 'id'>): Promise<UserEntity> {
    return (await this.userRepository.create(userToCreate)) as UserEntity;
  }
}
