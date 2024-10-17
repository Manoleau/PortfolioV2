import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Projet} from "../models/projet";
import {InfosService} from "../services/infos.service";
import {ProjetDetailComponent} from "../projet-detail/projet-detail.component";

@Component({
  selector: 'app-projet-detail-view',
  standalone: true,
  imports: [ProjetDetailComponent],
  templateUrl: './projet-detail-view.component.html',
  styleUrl: './projet-detail-view.component.css'
})
export class ProjetDetailViewComponent implements OnInit {
  nomProjet: string | null = null;
  projet!: Projet | undefined

  constructor(private route: ActivatedRoute, private infosService: InfosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nomProjet = params.get('nom');
      this.projet = this.infosService.getProjet(this.nomProjet);
    });
  }
}
