import { Component } from '@angular/core';
import {ProjetsComponent} from "../projets/projets.component";


@Component({
  selector: 'app-projets-view',
  standalone: true,
  imports: [ProjetsComponent],
  templateUrl: './projets-view.component.html',
  styleUrl: './projets-view.component.css'
})
export class ProjetsViewComponent {

}
