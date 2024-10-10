import { Injectable } from '@angular/core';
import {Hero} from "../models/hero";
import {Competence} from "../models/competence";
import {CategorieCompetence} from "../models/categorie-competence";
import {Information} from "../models/information";

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
  private competences: Competence[] = [
    {
      nom: 'HTML',
      image: 'fab fa-html5 ',
      categorie: this.language
    },
    {
      nom: 'CSS',
      image: 'fab fa-css3-alt ',
      categorie: this.language
    },
    {
      nom: 'JavaScript',
      image: 'fab fa-js ',
      categorie: this.language
    },
    {
      nom: 'PHP',
      image: 'fab fa-php ',
      categorie: this.language
    },
    {
      nom: 'Python',
      image: 'fab fa-python ',
      categorie: this.language
    },
    {
      nom: 'Java',
      image: 'fab fa-java ',
      categorie: this.language
    },
    {
      nom: 'C',
      image: '',
      categorie: this.language
    },
    {
      nom: 'Symfony',
      image: '',
      categorie: this.framework
    },
    {
      nom: 'Node.js',
      image: 'fab fa-node-js ',
      categorie: this.framework
    },
    {
      nom: 'Vue.js',
      image: 'fab fa-vuejs ',
      categorie: this.framework
    },
    {
      nom: 'React.js',
      image: 'fab fa-react ',
      categorie: this.framework
    },
    {
      nom: 'Bootstrap',
      image: 'fab fa-bootstrap ',
      categorie: this.framework
    },
    {
      nom: 'Angular',
      image: 'fab fa-angular',
      categorie: this.framework
    },
    {
      nom: 'Spring Boot',
      image: '',
      categorie: this.framework
    },
    {
      nom: 'Django',
      image: 'django.png',
      categorie: this.framework
    },
    {
      nom: 'MySQL',
      image: 'mysql.png ',
      categorie: this.datebase
    },
    {
      nom: 'PhpMyAdmin',
      image: '',
      categorie: this.datebase
    },
    {
      nom: 'MongoDB',
      image: '',
      categorie: this.datebase
    }
  ]

  private informations: Information[] = [
    {
      titre: 'Autodidacte',
      texte: 'En tant que développeur autodidacte, j\'ai acquis une expertise polyvalente en apprenant par moi-même, ce qui me permet d\'aborder les défis avec créativité et adaptabilité.'
    },
    {
      titre: 'Flexibilité et Adaptabilité',
      texte: 'Développeur flexible et adaptable, je propose des solutions innovantes en m\'adaptant rapidement aux nouvelles technologies. Collaboration aisée avec des équipes multidisciplinaires et réponses adaptées aux projets spécifiques.'
    }
  ]

  constructor() { }

  getHero(): Hero {
    return this.hero;
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
}
