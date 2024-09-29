import { JwtService } from '@nestjs/jwt';
import { User } from 'src/modules/user/entities/User';
interface SignInRequest {
    user?: User;
}
export declare class SignInUseCase {
    private jwtService;
    constructor(jwtService: JwtService);
    execute({ user }: SignInRequest): Promise<{
        jwtToken: string;
        userId: string;
    }>;
}
export {};
