import { UserRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/user.service';

import { TestBed } from '@suites/unit';
import type { StubbedInstance } from '@suites/types.doubles';
import { beforeEach, describe, expect, it } from 'vitest';
import type { UserRecord } from 'src/user/user.interfaces';

describe('UserService', () => {
  let service: UserService;

  let userRepository: StubbedInstance<UserRepository>;

  beforeEach(async () => {
    const { unit, unitRef } = await TestBed.solitary(UserService).compile();

    service = unit;
    userRepository = unitRef.get(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create user when called.', async () => {
      const user: UserRecord = { id: 1, email: 'email' };

      userRepository.create['mockResolvedValue'](user);

      await service.create({ email: 'email' });

      expect(userRepository.create).toHaveBeenCalledTimes(1);
      expect(userRepository.create).toHaveBeenCalledWith({
        id: 1,
        email: 'email',
      });
    });
  });
});
