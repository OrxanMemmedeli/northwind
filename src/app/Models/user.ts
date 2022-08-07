import { AdressInfo } from "./adressInfo"
import { CompanyInfo } from "./companyInfo"

export interface User{
    id: number,
    name: string,
    username: string,
    email: string,
    address: AdressInfo[],
    phone: string,
    website: string,
    company: CompanyInfo[],
}