import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../models/hero";
import { HeroComponent } from "../hero/hero.component";
import {InfosService} from "../services/infos.service";
import { CompetencesComponent } from "../competences/competences.component";

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [HeroComponent, CompetencesComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent implements OnInit{
  hero!: Hero;

  constructor(private infosService: InfosService) {}

  ngOnInit(): void {
    this.hero = this.infosService.getHero();
  }
}
