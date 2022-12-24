import { AnimalClass } from "./AnimalClass";
import { PetType } from "./PetType";

export class Hampster extends PetType {
    name="hampster";
    animalClass = AnimalClass.RODENT;
}