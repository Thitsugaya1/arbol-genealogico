import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import {AboutComponent} from './components/about/about.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import {ModificarArbolComponent} from './components/modificar-arbol/modificar-arbol.component';

const routes: Routes = [

  {path: '', component: MainComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'editar-perfil', component: EditarPerfilComponent},
  {path: 'modificar-arbol', component: ModificarArbolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
