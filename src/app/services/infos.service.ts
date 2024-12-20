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
    description: "Salut, moi, c'est Emmanuel ! Je suis en troisième année d'études en informatique et je suis aussi le genre de personne qui adore découvrir et apprendre de nouvelles choses que ça soit dans l'informatique ou bien dans la vie en général.|" +
      "Tout a commencé quand j’ai démonté mon vieux PC pour changer les pièces et booster ses performances dans les jeux vidéo. Depuis, je suis complètement fasciné par tout ce qui touche à la technologie et au développement.|" +
        "Pour être honnête, même si j’étais un bon élève, je n’ai jamais vraiment aimé l’école. Par contre, quand il s'agit de mettre les mains dans le cambouis et de bosser sur des projets intéressants, là, c'est une autre histoire. Que ce soit pour développer applications juste pour le fun ou bien, je suis toujours partant pour relever de nouveaux défis.|" +
      "J’aime aussi beaucoup aider et rendre service à mes proches grâce à mes passions. Qu’il s’agisse de résoudre un problème informatique, de bricoler un matériel ou même de coder une solution qui leur facilite la vie, j’aime mettre mes compétences à leur service.|" +
      "Quand je ne suis pas en train de coder ou d’étudier, vous pouvez me trouver en train de jouer aux jeux vidéo, de regarder des documentaires/films, d'écouter des podcasts ou bien de marcher dans Lyon. C’est mon moment de détente, et ça m’inspire souvent pour mes prochains projets.|" +
      "Je cherche toujours des occasions d’apprendre et de progresser dans le domaine de l’informatique. Si vous avez des projets sympas ou des défis à proposer, n’hésitez pas à me contacter. Je suis prêt à collaborer et à créer des trucs géniaux ensemble !",
    personnalite: "ISTP",
    photo: "emmanuel.PNG",
    profession: "Etudiant / Développeur",
    qualite: [
      {
        nom: 'Curieux',
        description : 'Explore et teste constamment'
      },
      {
        nom: 'Ouvert d\'esprit',
        description : 'Accueille les nouvelles idées facilement'
      },
      {
        nom: 'Analytique',
        description : 'Analyse et comprend les détails'
      },
      {
        nom: 'Logique',
        description : 'Raisonne de manière rationnelle'
      },
      {
        nom: 'Réfléchi',
        description : 'Pèse soigneusement ses options'
      },
      {
        nom: 'Pratique',
        description : 'Préfère l\'action aux théories abstraites'
      },
      {
        nom: 'Pragmatique',
        description : 'Gère les situations concrètes efficacement'
      },
      {
        nom: 'Autonome',
        description : 'Fonctionne bien sans supervision constante'
      },
      {
        nom: 'Direct',
        description : 'Va droit au but'
      },
      {
        nom: 'Stable',
        description : 'Garde son calme en crise'
      },
      {
        nom: 'Ingénieux',
        description : 'Trouve des solutions créatives rapidement'
      },
      {
        nom: 'Efficace',
        description : 'Atteint ses objectifs sans détour'
      }
    ]
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
  private kotlin = {
    nom: 'Kotlin',
    image: '',
    categorie: this.language
  }
  private androidstudio = {
    nom: 'Android Studio',
    image: '',
    categorie: this.other
  }
  private docker = {
    nom: 'Docker',
    image: 'fa-brands fa-docker',
    categorie: this.other
  }
  private competences: Competence[] = [
    this.html,
    this.css,
    this.js,
    this.php,
    this.python,
    this.java,
    this.kotlin,
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
    this.postgres,
    this.docker,
    this.androidstudio
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
      description: "Vous le regardez actuellement :D|Il consiste à me présenter.",
      git: 'https://github.com/Manoleau/PortfolioV2',
      pret: true,
      competences: [
        this.angular,
        this.bootstrap
      ]
    },
    {
      nom: 'Quizz Of Legends',
      image: '',
      description: 'Projet de qualité de développement en groupe.|Il consiste à afficher une description d\'un personnage ou d\'un objet et de trouver son nom.|L\'objectif de ce projet de cours était de faire des tests avec sonarqube.',
      git: 'https://forge.univ-lyon1.fr/p2201619/ra.05.08-quizz-of-legends',
      pret: false,
      competences: [
        this.django,
        this.mysql,
        this.css,
        this.js,
        this.docker
      ]
    },
    {
      nom: 'LeagueMastery',
      image: '',
      description: 'Projet final du cours de développement mobile en autonomie.|Il consiste à afficher les points de maîtrise de champions d\'un joueur de League of Legends en récupérant les informations sur une api créée pour le projet.',
      git: 'https://github.com/Manoleau/league-mastery',
      pret: true,
      competences: [
        this.java,
        this.kotlin,
        this.androidstudio,
        this.mongodb
      ]
    },
    {
      nom: 'EDT IUT',
      image: 'https://www.aht.li/3813545/logo_EDTIUT.png',
      description: 'Projet personnel / Bot Discord.|Il consiste à récupérer les emplois du temps des étudiants à l\'IUT Informatique pour les afficher sur notre groupe discord. Il peut aussi afficher les salles de cours qui sont libre.',
      git: 'https://github.com/Manoleau/edt-iut',
      pret: true,
      competences: [
        this.python,
        this.mysql,
      ]
    },
    {
      nom: 'LeagueDLE',
      image: '',
      description: 'Projet personnel / Bot Discord.|Dans la même idée que Quizz of Legends mais sur un bot discord avec un système de récompenses et d\'ouverture de coffres pour obtenir des skins.',
      git: 'https://github.com/Manoleau/bot-lol-dle',
      pret: true,
      competences: [
          this.python,
          this.mysql
      ]
    },

    {
      nom: 'LeagueDLEWeb',
      image: '',
      description: 'Projet personnel.|La même chose que LeagueDLE mais en site web',
      git: 'https://github.com/Manoleau/LeagueDleWeb',
      site: 'https://loldletitle.netlify.app/',
      pret: false,
      competences: [
          this.angular
      ]
    },
    {
      nom: 'Graphe aide à la décision',
      image: '',
      description: 'SAE IUT (groupe).|Le logiciel affiche différents points dans un graphe (map) qui représentre des centres hospitaliers et cela permet d\'aider les médecins en déplacement de savoir quelle est le chemin le plus rapide/sûr/court à l\'aide de l\'algorithme de Dijkstra.',
      git: 'https://forge.univ-lyon1.fr/p2200950/sae_java_outil_aide_a_la_decision',
      pret: true,
      competences: [
          this.java
      ]
    },
    {
      nom: 'Daily Info',
      image: '',
      description: 'SAE IUT (groupe).|Cette application consiste à afficher une mission ou un défi par jour (présentiel, code, multimédia...)',
      git: 'https://forge.univ-lyon1.fr/p2202150/daily-info',
      pret: true,
      competences: [
          this.php,
          this.mysql,
          this.js,
          this.css,
          this.html
      ]
    },
    {
      nom: 'Kick Discord',
      image: '',
      description: 'Projet personnel.|Permet de kick rapidement des personnes non désirés d\'un vocal discord',
      git: 'https://github.com/Manoleau/KickDiscord',
      pret: true,
      competences: [
          this.kotlin,
          this.java,
          this.python,
          this.androidstudio
      ]
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
          this.php,
          this.bootstrap,
          this.js,
          this.postgres,
          this.docker
        ],
        lien: 'https://www.ypok.com/'
      },
      {
        titre: "Stage Développeur",
        entreprise: "ONYL Rocks",
        description: "",
        dateDebut: new Date(2024, 3, 15),
        dateFin: new Date(2024, 5, 30),
        competences: [
          this.symfony,
          this.php,
          this.bootstrap,
          this.js,
          this.mysql
        ],
        lien: 'https://onyl.rocks/'
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
