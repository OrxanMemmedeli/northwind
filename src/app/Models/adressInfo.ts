import { GeoInfo } from "./geoInfo";

export interface AdressInfo{
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: GeoInfo[]
}