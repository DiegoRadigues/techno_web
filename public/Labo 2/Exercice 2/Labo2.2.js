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

const snoopy = new Animal('chien', 'Snoopy', 7);
const garfield = new Animal('chat', 'Garfield', 6);
const pluto = new Animal('chien', 'Pluto', 8);
const felix = new Animal('chat', 'Félix', 5);

const animals = [snoopy, garfield, pluto, felix];

function displayAnimalInHTML(animal) {
    const li = document.createElement('li');
    li.textContent = animal.display();
    document.getElementById('animalList').appendChild(li);
}

function displayAllAnimals() {
    animals.forEach(animal => {
        displayAnimalInHTML(animal);
    });
}

displayAllAnimals();

