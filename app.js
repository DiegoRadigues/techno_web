const express = require('express');
const app = express();
const port = 3000;

// Configurer EJS
app.set('view engine', 'ejs');

// Middleware pour parser le corps des requêtes POST
app.use(express.urlencoded({ extended: true }));

// Tableau pour stocker les tâches
let tasks = ['Tâche 1', 'Tâche 2'];

// Route pour afficher la liste des tâches
app.get('/', (req, res) => {
    res.render('index', { tasks: tasks });
});

// Route pour ajouter une nouvelle tâche
app.post('/addtask', (req, res) => {
    const newTask = req.body.task;
    if (newTask) {
        tasks.push(newTask);
    }
    res.redirect('/');
});

// Route pour supprimer une tâche
app.get('/deletetask/:id', (req, res) => {
    tasks.splice(req.params.id, 1);
    res.redirect('/');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
