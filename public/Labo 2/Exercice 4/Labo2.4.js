// Fonction pour créer un animal
function createAnimal(type, name, age) {
    return {
        type: type,
        name: name,
        age: age
    };
}

// Fonction pour afficher les info de l'animal
function displayAnimal(animal) {
    return `Type: ${animal.type}, Nom: ${animal.name}, Age: ${animal.age} ans`;
}

// Liste pour stocker tous les animaux
var animals = [];

// Fonction pour ajouter un animal à la liste HTML
function addAnimalToList(animal) {
    var li = document.createElement('li');
    li.textContent = displayAnimal(animal);
    document.getElementById('animalList').appendChild(li);
}

// Fonction pour calculer l'âge moyen par type
function calculateAverageAge(type) {
    var totalAge = 0;
    var count = 0;
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].type === type) {
            totalAge += animals[i].age;
            count++;
        }
    }
    return count > 0 ? (totalAge / count).toFixed(2) : 0;
}

// Quand on clique sur le bouton "ajouter"
document.getElementById('addAnimal').addEventListener('click', function() {
    var type = document.getElementById('type').value;
    var name = document.getElementById('name').value;
    var age = parseInt(document.getElementById('age').value);

    var animal = createAnimal(type, name, age);
    animals.push(animal);

    addAnimalToList(animal);

    document.getElementById('dogAverage').textContent = calculateAverageAge('chien');
    document.getElementById('catAverage').textContent = calculateAverageAge('chat');
});

// Ajout de quelques animaux pour tester
var snoopy = createAnimal('chien', 'Snoopy', 7);
var garfield = createAnimal('chat', 'Garfield', 6);


animals.push(snoopy, garfield); // ajoute à la liste

// Affiche les animaux dans la liste HTML et les moyennes d'âge
addAnimalToList(snoopy);
addAnimalToList(garfield);

document.getElementById('dogAverage').textContent = calculateAverageAge('chien');
document.getElementById('catAverage').textContent = calculateAverageAge('chat');
