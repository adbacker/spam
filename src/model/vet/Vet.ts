import { Specialty } from "../specialty/Specialty";

export class Vet {
    id: number;
    firstName: string;
    lastName: string;
    specialties: Specialty[];
    nrOfSpecialties: number;
    new: boolean;
}