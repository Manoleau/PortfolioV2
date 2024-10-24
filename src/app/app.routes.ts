import { Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { TestViewComponent } from './test-view/test-view.component';
import {ProjetsViewComponent} from "./projets-view/projets-view.component";
import {ProjetDetailViewComponent} from "./projet-detail-view/projet-detail-view.component";
import { SuccesViewComponent } from './succes-view/succes-view.component';

export const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'test', component: TestViewComponent },
  { path: 'projets', component: ProjetsViewComponent },
  { path: 'projet/:nom', component: ProjetDetailViewComponent },
  { path: 'accomplissement', component: SuccesViewComponent },
];
