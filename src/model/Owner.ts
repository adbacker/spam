import { Pet } from "./pet/Pet";

export class Owner {
    firstName: string;
    lastName: string;
    pets: Pet[] = [];
}