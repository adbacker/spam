import { AnimalClass } from "./AnimalClass";
import { PetType } from "./PetType";

export class Bird implements PetType {
    typeName = "bird";
    animalClass = AnimalClass.BIRD; 
}