import { SpecialtyType as SpecialtyType } from "./SpecialtyType";

export abstract class Specialty {
    id: number;
    name: string;
    new: boolean;
    specialtyType: SpecialtyType;
}