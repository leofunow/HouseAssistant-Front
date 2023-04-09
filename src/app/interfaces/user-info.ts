import { ObjectShortInfo } from "./object-short-info";

export interface UserInfo {
    _id: string;
    name: string;
    desc: string;
    email: string;
    contacts: string[];
    picture: string;
    objects: ObjectShortInfo[];
}
