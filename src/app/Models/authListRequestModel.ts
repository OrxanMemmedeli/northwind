import { AuthRequestModel } from "./authRequestModel";



export interface AuthListRequestModel<T> extends AuthRequestModel{
    quotes: T[]
}