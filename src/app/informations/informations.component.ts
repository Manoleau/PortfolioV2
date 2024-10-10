import {Component, OnInit} from '@angular/core';
import {Information} from "../models/information";
import {InfosService} from "../services/infos.service";
import { CommandSvgComponent } from "../command-svg/command-svg.component";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-informations',
  standalone: true,
  imports: [CommandSvgComponent, TitleCasePipe],
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.css'
})
export class InformationsComponent implements OnInit {
    informations: Information[] = []
    constructor(private infosService: InfosService) {}

    ngOnInit(): void {
      this.informations = this.infosService.getInformations();
    }
}
