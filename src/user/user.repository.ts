import { Injectable } from '@nestjs/common';
import type { UserRecord } from 'src/user/user.interfaces';

@Injectable()
export class UserRepository {
  constructor() {}
  private users: UserRecord[] = [];

  create(userToCreate = { email: 'email' }): UserRecord | undefined {
    this.users.push({ id: this.users.length + 1, email: userToCreate.email });
    return this.users.at(-1);
  }
}
