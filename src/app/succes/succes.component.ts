import { Component, OnInit } from '@angular/core';
import { Succes } from '../models/succes';
import { InfosService } from '../services/infos.service';

@Component({
  selector: 'app-succes',
  standalone: true,
  imports: [],
  templateUrl: './succes.component.html',
  styleUrl: './succes.component.css'
})
export class SuccesComponent implements OnInit {
  success: Succes[] = [];
  constructor(private infosService: InfosService) {}

  ngOnInit(): void {
    this.success = this.infosService.getSuccess();
  }
}
