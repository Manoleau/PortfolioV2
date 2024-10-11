import {Component, OnInit} from '@angular/core';
import {InfosService} from "../services/infos.service";
import {Projet} from "../models/projet";

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent implements OnInit {

  projets: Projet[] = [];
  constructor(private infosService: InfosService) {}

  ngOnInit(): void {
    this.projets = this.infosService.getProjets();
  }
}
