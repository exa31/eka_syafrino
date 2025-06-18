export type ResponseModel<T> = {
    success: boolean;
    message: string;
    data: T;
    timestamp: string;
}