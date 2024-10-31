import { Component } from '@angular/core';
import { Experience } from '../models/experience';
import { InfosService } from '../services/infos.service';
import { DatePipe } from '@angular/common';
import { CompetenceComponent } from '../competence/competence.component';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [DatePipe, CompetenceComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
    experiences: Experience[] = []

    constructor(private infosService: InfosService) {}

    ngOnInit(): void {
      this.experiences = this.infosService.getExperiences();
    }

}
