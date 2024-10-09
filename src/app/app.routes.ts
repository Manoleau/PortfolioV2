import { Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { TestViewComponent } from './test-view/test-view.component';

export const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'test', component: TestViewComponent },
];
