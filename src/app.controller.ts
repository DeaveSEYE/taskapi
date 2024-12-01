import { Controller, Get } from '@nestjs/common';
import axios from 'axios';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Données statiques pour les tâches et catégories
  private readonly dataTasks = [
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

  private readonly dataCategories = [
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

  private readonly API_URL = 'https://taskapi-yz3z.onrender.com/';

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Route GET /add pour synchroniser les données
  @Get('add')
  async addData(): Promise<string> {
    try {
      console.log('Démarrage de la synchronisation des données...');

      // Envoi des tâches
      for (const task of this.dataTasks) {
        console.log(`Envoi de la tâche :`, task);
        await axios.post(`${this.API_URL}task`, task);
      }

      // Envoi des catégories
      for (const category of this.dataCategories) {
        console.log(`Envoi de la catégorie :`, category);
        await axios.post(`${this.API_URL}categorie`, category);
      }

      console.log('Synchronisation terminée.');
      return 'Synchronisation réussie.';
    } catch (error) {
      console.error('Erreur lors de la synchronisation :', error.message);
      return `Erreur lors de la synchronisation : ${error.message}`;
    }
  }
}
