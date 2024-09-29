import { ValidateUserUseCase } from '../useCase/validateUseCase';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private validateUserUseCase;
    constructor(validateUserUseCase: ValidateUserUseCase);
    validate(email: string, password_hash: string): Promise<any>;
}
export {};
