import { Specialty } from "./Specialty";
import { SpecialtyType } from "./SpecialtyType";

export class Dental extends Specialty {
    name = "dental";
    specialityType: SpecialtyType.DENTAL;
}