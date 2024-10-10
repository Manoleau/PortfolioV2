import {Component, OnInit} from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive,} from '@angular/router';
import {Hero} from "../models/hero";
import {InfosService} from "../services/infos.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  hero!: Hero;

  constructor(private infosService: InfosService) {}

  ngOnInit(): void {
    this.hero = this.infosService.getHero();
  }
}
