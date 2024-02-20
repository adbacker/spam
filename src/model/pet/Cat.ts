import {AnimalClass} from "./AnimalClass";
import {PetType} from "./PetType";

export class Cat implements PetType {
    typeName = "cat";
    animalClass = AnimalClass.CAT;
}