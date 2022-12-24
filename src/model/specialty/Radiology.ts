import { Specialty } from "./Specialty";
import { SpecialtyType } from "./SpecialtyType";

export class Radiology extends Specialty {
    name = "radiology";
    specialityType: SpecialtyType.RADIOLOGY;
}