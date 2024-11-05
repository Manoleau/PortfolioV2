import {Component, Input, OnInit} from '@angular/core';
import {Competence} from "../models/competence";

@Component({
  selector: 'app-competence',
  standalone: true,
  imports: [],
  templateUrl: './competence.component.html',
  styleUrl: './competence.component.css'
})
export class CompetenceComponent implements OnInit {
  @Input() competence!: Competence;
  @Input() taille!: 'petite' | 'normal'

  ngOnInit(): void {
    if (!this.taille) {
      this.taille = 'normal'
    }
  }
}
