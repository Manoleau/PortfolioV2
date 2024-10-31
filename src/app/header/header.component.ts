import {Component, OnInit} from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive,} from '@angular/router';
import {Hero} from "../models/hero";
import {InfosService} from "../services/infos.service";
import { Link } from '../models/link';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  hero!: Hero;
  tabLinks: Link[] = [
    {
        id : 'about-link',
        nom : 'A Propos',
        lien : '#about',
        active : true
    },
    {
      id : 'skills-link',
      nom : 'Compétences',
      lien : '#skills',
      active : false
    },
    {
      id : 'experiences-link',
      nom : 'Expériences',
      lien : '#experiences',
      active : false
    },
    {
      id : 'project-link',
      nom : 'Projets',
      lien : '#projets',
      active : false
    },
  ]

  constructor(private infosService: InfosService) {}

  changeActive(link: Link):void {
      this.tabLinks.forEach((item) => {
        if (item.id === link.id) {
          item.active = true
        } else {
          item.active = false
        }
      })
  }



  ngOnInit(): void {
    this.hero = this.infosService.getHero();
  }
}
