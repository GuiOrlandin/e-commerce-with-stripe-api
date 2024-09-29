import { AppException } from 'src/exceptions/appException';
interface UserWithoutPermissionExceptionProps {
    actionName: string;
}
export declare class UserWithoutPermissionException extends AppException {
    constructor({ actionName }: UserWithoutPermissionExceptionProps);
}
export {};
