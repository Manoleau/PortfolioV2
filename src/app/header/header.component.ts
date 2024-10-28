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
  // tabLinks: [] = [
  //   {

  //   }
  // ]
  currentLinkActive: string = 'about'

  constructor(private infosService: InfosService) {}

  changeActive(e: Event):void {
    const target = e.target as HTMLLinkElement;

    console.log('Contenu du bouton :', target.innerText); // Texte du bouton
    console.log('Data-info :', target.getAttribute('data-info'));
  }



  ngOnInit(): void {
    this.hero = this.infosService.getHero();
  }
}
