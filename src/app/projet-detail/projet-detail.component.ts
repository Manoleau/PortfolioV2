import {Component, Input} from '@angular/core';
import {Projet} from "../models/projet";

@Component({
  selector: 'app-projet-detail',
  standalone: true,
  imports: [],
  templateUrl: './projet-detail.component.html',
  styleUrl: './projet-detail.component.css'
})
export class ProjetDetailComponent {
    @Input() projet!: Projet;
}
