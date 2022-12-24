import { Visit } from "../visit/Visit";
import { PetType } from "./PetType";

export class Pet {
    name: string;
    bday: Date;
    petType: PetType;
    visits: Visit[];
}