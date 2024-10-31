import {Component, Input} from '@angular/core';
import {Hero} from "../models/hero";
import { InformationsComponent } from '../informations/informations.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [InformationsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() hero!: Hero;

}
