import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  // {
  //   path: 'movies',
  //   loadChildren: () =>
  //     import('./app-shell/movies/movies.module').then(mod => mod.MoviesModule)
  // },
  {
    path: 'movies',
    loadChildren: () => import('./app-shell/movies/movies.module').then(m => m.MoviesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
