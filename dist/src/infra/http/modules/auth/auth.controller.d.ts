import { AuthRequestModel } from './models/AuthRequestModel';
import { AuthenticatedRequestModel } from './models/authenticateRequestModel';
import { SignInUseCase } from 'src/modules/auth/useCase/signInUseCase';
export declare class AuthController {
    private signInUseCase;
    constructor(signInUseCase: SignInUseCase);
    signIn(request: AuthRequestModel): Promise<{
        access_token: {
            jwtToken: string;
            userId: string;
        };
    }>;
    test(request: AuthenticatedRequestModel): Promise<{
        id: string;
        email: string;
        name: string;
        created_at: string;
    }>;
}
