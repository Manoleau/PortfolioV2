import {Component, OnInit} from '@angular/core';
import {Hero} from "../models/hero";
import {InfosService} from "../services/infos.service";
import { CompetencesComponent } from "../competences/competences.component";
import {InformationsComponent} from "../informations/informations.component";
import {ProjetsComponent} from "../projets/projets.component";
import { ExperiencesComponent } from '../experiences/experiences.component';
import { SoftSkillComponent } from '../soft-skill/soft-skill.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [InformationsComponent, ExperiencesComponent, CompetencesComponent, InformationsComponent, ProjetsComponent, SoftSkillComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent implements OnInit{
  hero!: Hero;
  description: string[] = []
  constructor(private infosService: InfosService) {}

  ngOnInit(): void {
    this.hero = this.infosService.getHero();
    this.description = this.hero.description.split('|')
  }
}
