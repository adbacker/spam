import {Pet} from "./pet/Pet";

export class Owner {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    phone: string;
    pets: Pet[] = [];

    public fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}