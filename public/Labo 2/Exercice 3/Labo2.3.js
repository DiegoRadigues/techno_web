class Animal {
    constructor(type, name, age) {
        this.type = type;
        this.name = name;
        this.age = age;
    }

    display() {
        return `Type: ${this.type}, Nom: ${this.name}, Age: ${this.age} ans`;
    }
}

const animals = [];

function addAnimalToList(animal) {
    const li = document.createElement('li');
    li.textContent = animal.display();
    document.getElementById('animalList').appendChild(li);
}

function calculateAverageAge(type) {
    const filteredAnimals = animals.filter(animal => animal.type === type);
    const totalAge = filteredAnimals.reduce((sum, animal) => sum + animal.age, 0);
    return (filteredAnimals.length > 0) ? (totalAge / filteredAnimals.length).toFixed(2) : 0;
}

const snoopy = new Animal('chien', 'Snoopy', 7);
const garfield = new Animal('chat', 'Garfield', 6);
const pluto = new Animal('chien', 'Pluto', 8);
const felix = new Animal('chat', 'Félix', 5);
animals.push(snoopy, garfield, pluto, felix);

addAnimalToList(snoopy);
addAnimalToList(garfield);
addAnimalToList(pluto);
addAnimalToList(felix);

document.getElementById('dogAverage').textContent = calculateAverageAge('chien');
document.getElementById('catAverage').textContent = calculateAverageAge('chat');
