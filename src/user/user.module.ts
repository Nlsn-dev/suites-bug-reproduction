import { UserRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/user.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
