import { Component, Input } from '@angular/core';
import { Qualite } from '../models/qualite';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-soft-skill',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './soft-skill.component.html',
  styleUrl: './soft-skill.component.css'
})
export class SoftSkillComponent {
    @Input() skill!: Qualite
}
