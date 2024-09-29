import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from '../models/userPayload';
import { User } from '../../user/entities/User';

interface SignInRequest {
  user?: User;
}

@Injectable()
export class SignInUseCase {
  constructor(private jwtService: JwtService) {}

  async execute({ user }: SignInRequest) {
    const payload: UserPayload = {
      created_at: user.created_at,
      email: user.email,
      name: user.name,
      sub: user.id,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      jwtToken,
      userId: user.id,
    };
  }
}
