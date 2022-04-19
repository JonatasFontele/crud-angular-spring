import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // pathMatch para garantir que vai analisar todo o roteamento.
  // Ex.: vai verificar localhost:4200 com ou sem barra no fim.
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { // Rota de lazy-loading
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
