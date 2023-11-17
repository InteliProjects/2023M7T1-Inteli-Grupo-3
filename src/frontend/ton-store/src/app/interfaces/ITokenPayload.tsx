export interface ITokenPayload {
    sub: number;
    email: string;
    name: string;
    surname: string;
    iat?: number;
    exp?: number;

}