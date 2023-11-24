// Importer Express et body-parser
const express = require('express');
const bodyParser = require('body-parser');

// Init app avec Express
const app = express();
// Port 3001 pour le serveur
const port = 3001;

// Liste de tâches de base
let tasks = ["Faire valider mon exercice", "Résussir le test"];

// Setup EJS pour le rendu
app.set('view engine', 'ejs');

// Middleware pour parser les données POST
app.use(bodyParser.urlencoded({ extended: true }));

// Servir fichiers statiques
app.use(express.static('public'));

// Route '/' -> page accueil
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/portefolio.html');
});

// Route '/taches' -> montre les tâches
app.get('/taches', (req, res) => {
  res.render('index', { tasks: tasks });
});

// Route '/addtask' -> ajoute tâche
app.post('/addtask', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect('/taches');
});

// Route '/deletetask/:id' -> supprime tâche
app.get('/deletetask/:id', (req, res) => {
  const id = req.params.id;
  tasks.splice(id, 1);
  res.redirect('/taches');
});

// Start serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
