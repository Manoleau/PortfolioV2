import { Component } from '@angular/core';
import { SuccesComponent } from '../succes/succes.component';

@Component({
  selector: 'app-succes-view',
  standalone: true,
  imports: [SuccesComponent],
  templateUrl: './succes-view.component.html',
  styleUrl: './succes-view.component.css'
})
export class SuccesViewComponent {
    
}
