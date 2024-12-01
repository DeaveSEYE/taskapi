const axios = require('axios');

// URL de l'API et point de terminaison
const API_URL = 'https://taskapi-yz3z.onrender.com/';

// Exemple de données à envoyer
const dataTasks = [
  {
    "id": 1,
    "title": "Créer un nouveau logo pour le site web",
    "categorie": "Design",
    "description": "Concevoir un logo moderne et attrayant pour le site web de l'entreprise.",
    "priority": "eleve",
    "isChecked": "1",
    "categorieColor": "blue",
    "createdAt": "2024-11-27T20:51:18.424Z",
    "updatedAt": "2024-11-27T20:57:21.574Z",
    "dueDate": "2024-12-05T17:00:00.000Z"
  },
  {
    "id": 2,
    "title": "Mettre à jour la conception de la page d'accueil",
    "categorie": "Design",
    "description": "Améliorer la page d'accueil du site pour la rendre plus interactive et visuellement attractive.",
    "priority": "moyenne",
    "isChecked": "0",
    "categorieColor": "blue",
    "createdAt": "2024-11-27T20:52:18.424Z",
    "updatedAt": "2024-11-27T20:57:33.047Z",
    "dueDate": "2024-12-10T18:00:00.000Z"
  },
  {
    "id": 4,
    "title": "Corriger le bug de la page de connexion",
    "categorie": "Development",
    "description": "Résoudre le problème de connexion où certains utilisateurs ne peuvent pas se connecter avec leurs identifiants.",
    "priority": "eleve",
    "isChecked": "1",
    "categorieColor": "orange",
    "createdAt": "2024-11-27T20:54:18.424Z",
    "updatedAt": "2024-11-27T20:57:46.672Z",
    "dueDate": "2024-12-02T15:00:00.000Z"
  },
  {
    "id": 6,
    "title": "Planifier la campagne sur les réseaux sociaux",
    "categorie": "Marketing",
    "description": "Établir un plan pour la campagne publicitaire sur Facebook et Instagram pour le mois prochain.",
    "priority": "basse",
    "isChecked": "0",
    "categorieColor": "purple",
    "createdAt": "2024-11-27T20:53:18.424Z",
    "updatedAt": "2024-11-30T12:58:55.998Z",
    "dueDate": "2024-12-12T14:00:00.000Z"
  },
  {
    "id": 7,
    "title": "Préparer la présentation pour la réunion client",
    "categorie": "Marketing",
    "description": "Créer une présentation PowerPoint détaillant les résultats de la dernière campagne et les prochaines étapes pour le client.",
    "priority": "moyenne",
    "isChecked": "1",
    "categorieColor": "purple",
    "createdAt": "2024-11-27T20:55:18.424Z",
    "updatedAt": "2024-11-30T12:59:31.705Z",
    "dueDate": "2024-12-07T09:00:00.000Z"
  }
];
const dataCategories = [
  {
    "id": 6,
    "categorie": "Design",
    "categorieColor": "blue",
    "createdAt": "2024-11-30T12:31:37.489Z",
    "updatedAt": "2024-11-30T12:31:37.494Z"
  },
  {
    "id": 8,
    "categorie": "Development",
    "categorieColor": "orange",
    "createdAt": "2024-11-30T12:32:11.603Z",
    "updatedAt": "2024-11-30T12:32:11.603Z"
  },
  {
    "id": 9,
    "categorie": "Defaut",
    "categorieColor": "grey",
    "createdAt": "2024-11-30T12:32:51.715Z",
    "updatedAt": "2024-11-30T12:32:51.715Z"
  },
  {
    "id": 10,
    "categorie": "Marketing",
    "categorieColor": "purple",
    "createdAt": "2024-11-30T12:54:40.040Z",
    "updatedAt": "2024-11-30T12:54:40.044Z"
  },
  {
    "id": 12,
    "categorie": "Marketing",
    "categorieColor": "purple",
    "createdAt": "2024-11-27T20:55:18.424Z",
    "updatedAt": "2024-11-30T13:00:52.538Z"
  }
];
// Fonction pour envoyer les données
async function postTasks(item) {
  try {
    const response = await axios.post(API_URL+'task', item);
    console.log(`Succès : ${response.status} - ${response.statusText}`);
  } catch (error) {
    console.error(`Erreur en postant les données de task :`, error.message);
  }
}

async function postCategories(item) {
    try {
      const response = await axios.post(API_URL+"categorie", item);
      console.log(`Succès : ${response.status} - ${response.statusText}`);
    } catch (error) {
      console.error(`Erreur en postant les données de categorie :`, error.message);
    }
  }
// Fonction principale
async function syncData() {
  console.log('Démarrage de la synchronisation des données...');
  
  for (const item of dataTasks) {
    console.log(`TASK Envoi des données pour :`, item);
    await postTasks(item);
  }
  for (const item of dataCategories) {
    console.log(`CATEGORIE Envoi des données pour :`, item);
    await postCategories(item);
  }
  console.log('Synchronisation terminée.');
}

// Lancer la synchronisation
syncData();
