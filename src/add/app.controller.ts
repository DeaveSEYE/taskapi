// app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import axios from 'axios';


// Données statiques pour les tâches et catégories
const dataTasks = [
    {
      "title": "Créer un nouveau logo pour le site web",
      "categorie": "Design",
      "description": "Concevoir un logo moderne et attrayant pour le site web de l'entreprise.",
      "priority": "eleve",
      "isChecked": "1",
      "categorieColor": "blue",
      "dueDate": "2024-12-05T17:00:00.000Z"
    },
    {
      "title": "Mettre à jour la conception de la page d'accueil",
      "categorie": "Design",
      "description": "Améliorer la page d'accueil du site pour la rendre plus interactive et visuellement attractive.",
      "priority": "moyenne",
      "isChecked": "0",
      "categorieColor": "blue",
      "dueDate": "2024-12-10T18:00:00.000Z"
    },
    {
      "title": "Corriger le bug de la page de connexion",
      "categorie": "Development",
      "description": "Résoudre le problème de connexion où certains utilisateurs ne peuvent pas se connecter avec leurs identifiants.",
      "priority": "eleve",
      "isChecked": "1",
      "categorieColor": "orange",
      "dueDate": "2024-12-02T15:00:00.000Z"
    },
    {
      "title": "Planifier la campagne sur les réseaux sociaux",
      "categorie": "Marketing",
      "description": "Établir un plan pour la campagne publicitaire sur Facebook et Instagram pour le mois prochain.",
      "priority": "basse",
      "isChecked": "0",
      "categorieColor": "purple",
      "dueDate": "2024-12-12T14:00:00.000Z"
    },
    {
      "title": "Préparer la présentation pour la réunion client",
      "categorie": "Marketing",
      "description": "Créer une présentation PowerPoint détaillant les résultats de la dernière campagne et les prochaines étapes pour le client.",
      "priority": "moyenne",
      "isChecked": "1",
      "categorieColor": "purple",
      "dueDate": "2024-12-07T09:00:00.000Z"
    }
  ];

const dataCategories = [
    {
      "categorie": "Defaut",
      "categorieColor": "grey"
    },
    {
      "categorie": "Design",
      "categorieColor": "blue"
    },
    {
      "categorie": "Development",
      "categorieColor": "orange"
    },
    {
      "categorie": "Marketing",
      "categorieColor": "purple"
    },
    {
      "categorie": "Marketing",
      "categorieColor": "purple"
    }
  ];

@ApiTags('Data Synchronization') // Catégorie Swagger
@Controller()
export class AppController {
  private readonly API_URL = 'https://taskapi-yz3z.onrender.com/';

  // Route pour ajouter les données

  @Get('add')
  @ApiOperation({ summary: 'Synchroniser les données de tâches et catégories' })
  async addData(): Promise<string> {
    try {
      console.log('Démarrage de la synchronisation des données...');

      // Envoyer les tâches
      for (const task of dataTasks) {
        console.log(`Envoi de la tâche :`, task);
        await axios.post(`${this.API_URL}task`, task);
      }

      // Envoyer les catégories
      for (const category of dataCategories) {
        console.log(`Envoi de la catégorie :`, category);
        await axios.post(`${this.API_URL}categorie`, category);
      }

      console.log('Synchronisation terminée.');
      return 'Synchronisation réussie.';
    } catch (error) {
      console.error(`Erreur lors de la synchronisation :`, error.message);
      return `Erreur lors de la synchronisation : ${error.message}`;
    }
  }
}
