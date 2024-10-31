import { Injectable } from '@angular/core';
import {Hero} from "../models/hero";
import {Competence} from "../models/competence";
import {CategorieCompetence} from "../models/categorie-competence";
import {Information} from "../models/information";
import {Projet} from "../models/projet";
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  private hero: Hero = {
    prenom: "Emmanuel",
    nom: "Ardoin",
    description: "Salut ! Moi, c'est Emmanuel. Actuellement en deuxième année d'études en informatique, je suis le genre de personne qui adore résoudre des casse-têtes et transformer les lignes de code en quelque chose de cool et fonctionnel.|Tout a commencé quand j'ai décidé de démonter mon vieux PC pour y changer les pièces et avoir plus de performances dans les jeux vidéos. Depuis, je suis fasciné par tout ce qui touche à la technologie et au développement.|Pour être honnête, l'école et moi, ça n'a pas toujours été une histoire d'amour. Mais quand il s'agit de mettre les mains dans le cambouis et de travailler sur des projets personnels, là je suis dans mon élément. Que ce soit pour développer des bots discord qui me plaisent ou pour trifouiller dans le hardware, je suis toujours prêt à relever le défi.|Quand je ne suis pas en train de coder ou de me plonger dans mes études, vous pouvez me trouver en train de jouer aux jeux vidéo ou en train de regarder des vidéos de Underscore_. Ça me permet de me détendre et de m'inspirer pour mes prochains projets.|Je suis toujours à la recherche de nouvelles opportunités pour apprendre et grandir dans le domaine de l'informatique. Si vous avez des projets intéressants ou des défis à relever, n'hésitez pas à me contacter. J'ai hâte de collaborer et de créer quelque chose d'exceptionnel ensemble.",
    personnalite: "ISTP",
    photo: "emmanuel.PNG",
    profession: "Etudiant / Développeur"
  }
  private framework: CategorieCompetence = {
    nom: 'Framework',
    image: 'fas fa-cogs'
  }
  private language: CategorieCompetence = {
    nom: 'Langage',
    image: 'fas fa-code'
  }
  private datebase: CategorieCompetence = {
    nom: 'Database',
    image: 'fas fa-database'
  }
  private other: CategorieCompetence = {
    nom: 'Autres',
    image: 'fas fa-ellipsis-h'
  }
  private html = {
    nom: 'HTML',
    image: 'fab fa-html5 ',
    categorie: this.language
  }
  private css = {
    nom: 'CSS',
    image: 'fab fa-css3-alt ',
    categorie: this.language
  }
  private js = {
    nom: 'JavaScript',
    image: 'fab fa-js ',
    categorie: this.language
  }
  private php = {
    nom: 'PHP',
    image: 'fab fa-php ',
    categorie: this.language
  }
  private python = {
    nom: 'Python',
    image: 'fab fa-python ',
    categorie: this.language
  }
  private java = {
    nom: 'Java',
    image: 'fab fa-java ',
    categorie: this.language
  }
  private c = {
    nom: 'C',
    image: '',
    categorie: this.language
  }
  private symfony = {
    nom: 'Symfony',
    image: '',
    categorie: this.framework
  }
  private nodejs = {
    nom: 'Node.js',
    image: 'fab fa-node-js ',
    categorie: this.framework
  }
  private vuejs = {
    nom: 'Vue.js',
    image: 'fab fa-vuejs ',
    categorie: this.framework
  }
  private reactjs = {
    nom: 'React.js',
    image: 'fab fa-react ',
    categorie: this.framework
  }
  private bootstrap = {
    nom: 'Bootstrap',
    image: 'fab fa-bootstrap ',
    categorie: this.framework
  }
  private angular = {
    nom: 'Angular',
    image: 'fab fa-angular',
    categorie: this.framework
  }
  private springboot = {
    nom: 'Spring Boot',
    image: '',
    categorie: this.framework
  }
  private django = {
    nom: 'Django',
    image: 'django.png',
    categorie: this.framework
  }
  private mysql = {
    nom: 'MySQL',
    image: 'mysql.png ',
    categorie: this.datebase
  }
  private phpmyadmin = {
    nom: 'PhpMyAdmin',
    image: '',
    categorie: this.datebase
  }
  private mongodb = {
    nom: 'MongoDB',
    image: '',
    categorie: this.datebase
  }
  private postgres = {
    nom: 'PostgreSQL',
    image: '',
    categorie: this.datebase
  }
  private competences: Competence[] = [
    this.html,
    this.css,
    this.js,
    this.php,
    this.python,
    this.java,
    this.c,
    this.symfony,
    this.nodejs,
    this.vuejs,
    this.reactjs,
    this.bootstrap,
    this.angular,
    this.springboot,
    this.django,
    this.mysql,
    this.phpmyadmin,
    this.mongodb,
    this.postgres
  ]

  private informations: Information[] = [
    {
      titre: 'Autodidacte',
      texte: 'En tant que développeur autodidacte, j\'ai acquis une expertise polyvalente en apprenant par moi-même, ce qui me permet d\'aborder les défis avec créativité et adaptabilité.'
    },
    {
      titre: 'Spécialité Backend',
      texte: 'Développeur backend, je conçois des API performantes et sécurisées, en optimisant l\'architecture serveur et la gestion des bases de données, tout en garantissant l\'évolutivité des systèmes.'
    },
    {
      titre: 'Flexibilité et Adaptabilité',
      texte: 'Développeur flexible et adaptable, je propose des solutions innovantes en m\'adaptant rapidement aux nouvelles technologies. Collaboration aisée avec des équipes multidisciplinaires et réponses adaptées aux projets spécifiques.'
    }
  ]

  private projets: Projet[] = [
    {
      nom: 'Portfolio',
      image: 'projet-portfolio.PNG',
      description: "C'est mon Portfolio",
      git: 'https://github.com/Manoleau/PortfolioV2',
      pret: false,
    },
    {
      nom: 'LeagueMastery',
      image: '',
      description: '',
      git: '',
      pret: true,
    },
    {
      nom: 'EDT IUT',
      image: 'https://www.aht.li/3813545/logo_EDTIUT.png',
      description: '',
      git: 'https://github.com/Manoleau/edt-iut',
      pret: true,
    },
    {
      nom: '',
      image: '',
      description: '',
      git: '',
      pret: false,
    },
    {
      nom: '',
      image: '',
      description: '',
      git: '',
      pret: false,
    },
    {
      nom: '',
      image: '',
      description: '',
      git: '',
      pret: false,
    },

  ];
  
  private experiences: Experience[] = [
      {
        titre: "Alternance Développeur",
        entreprise: "YPOK",
        description: "",
        dateDebut: new Date(2024, 9, 21),
        dateFin: null,
        competences: [
          this.symfony,
          this.bootstrap,
          this.js
        ]
      }
  ]

  constructor() { }

  getHero(): Hero {
    return this.hero;
  }

  getExperiences(): Experience[] {
      return this.experiences;
  }

  getCompetences(): Competence[] {
    return this.competences;
  }
  getCategoriesCompetence(): CategorieCompetence[] {
    return [
      this.language,
      this.framework,
      this.datebase,
      this.other
    ]
  }
  getInformations(): Information[] {
    return this.informations;
  }
  getProjets(): Projet[] {
    return this.projets;
  }

  getProjet(nomProjet: string | null): Projet | undefined {
    if (nomProjet) {
      return this.projets.find((p) => p.nom.toLowerCase().replace(' ', '') === nomProjet.toLowerCase().replace(' ', ''));
    }
    return undefined
  }
}
