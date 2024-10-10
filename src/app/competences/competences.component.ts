import {Component, OnInit} from '@angular/core';
import {Competence} from "../models/competence";
import { CompetenceComponent } from "../competence/competence.component";
import {InfosService} from "../services/infos.service";
import {CategorieCompetence} from "../models/categorie-competence";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CompetenceComponent, TitleCasePipe],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent implements OnInit{

  competences: Competence[] = [];
  filteredCompetences: Competence[] = [];
  categoriesCompetences: CategorieCompetence[] = []
  constructor(private infosService: InfosService) {}

  ngOnInit(): void {
    this.competences = this.infosService.getCompetences();
    this.categoriesCompetences = this.infosService.getCategoriesCompetence();
    this.filteredCompetences = [...this.competences];

  }
  filterCompetences(categorie: string) {
    if (categorie === 'all') {
      this.filteredCompetences = [...this.competences];
    } else {
      this.filteredCompetences = this.competences.filter(comp => comp.categorie.nom === categorie);
    }
  }

}
