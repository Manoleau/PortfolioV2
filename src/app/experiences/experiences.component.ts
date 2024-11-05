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
    calculateDuration(dateDebut: Date, dateFin: Date | null): string {
      const endDate = dateFin || new Date();
      let years = endDate.getFullYear() - dateDebut.getFullYear();
      let months = endDate.getMonth() - dateDebut.getMonth();
  
      if (months < 0) {
        months += 12;
        years -= 1;
      }
  
      let duration = '';
      if (years > 0) duration += `${years} an${years > 1 ? 's' : ''} `;
      if (months > 0) duration += `${months} mois`;
  
      return duration.trim();
    }
    ngOnInit(): void {
      this.experiences = this.infosService.getExperiences();
    }

}
