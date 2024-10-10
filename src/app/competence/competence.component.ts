import {Component, Input} from '@angular/core';
import {Competence} from "../models/competence";

@Component({
  selector: 'app-competence',
  standalone: true,
  imports: [],
  templateUrl: './competence.component.html',
  styleUrl: './competence.component.css'
})
export class CompetenceComponent {
  @Input() competence!: Competence;
}
