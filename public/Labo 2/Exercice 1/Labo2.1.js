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

console.log(snoopy.display());
console.log(garfield.display());

function displayAnimalInHTML(animal) {
    const li = document.createElement('li');
    li.textContent = animal.display();
    document.getElementById('animalList').appendChild(li);
}

displayAnimalInHTML(snoopy);
displayAnimalInHTML(garfield);
