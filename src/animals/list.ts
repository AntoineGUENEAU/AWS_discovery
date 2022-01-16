import Animal from "./Animal";

export default function animalList(): Array<Animal> {
    return [
        new Animal(1, 'cat'),
        new Animal(2, 'fish'),
        new Animal(3, 'dog'),
    ]
}
