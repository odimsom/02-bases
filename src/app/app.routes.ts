import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DrangonBallPageComponent } from './pages/dragon-ball/dragonball-page.component';
import { DrangonBallsuperPageComponent } from './pages/dragon-ball-super/dragonballsuper-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'drangonball',
    component: DrangonBallPageComponent,
  },
  {
    path: 'daragonballsuper',
    component: DrangonBallsuperPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
