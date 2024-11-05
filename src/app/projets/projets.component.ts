import {Component, Input, OnInit} from '@angular/core';
import {InfosService} from "../services/infos.service";
import {Projet} from "../models/projet";
import { CompetenceComponent } from '../competence/competence.component';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CompetenceComponent],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent implements OnInit {
  projets: Projet[] = [];
  constructor(private infosService: InfosService) {}
  formatDescription(description: string): string {
    return description.replaceAll('|', '<br><br>');
  }
  ngOnInit(): void {
    this.projets = this.infosService.getProjets();
  }
}
