import { HttpException, HttpStatus } from '@nestjs/common';
export interface AppExceptionProps {
    message: string;
    status: HttpStatus;
    field?: {
        [key: string]: string;
    };
}
export declare class AppException extends HttpException {
    constructor({ field, message, status }: AppExceptionProps);
}
