import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import {AboutComponent} from './components/about/about.component';

import {VistaArbolComponent} from "./components/vista-arbol/vista-arbol.component";

import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';


const routes: Routes = [

  {path: '', component: MainComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'vista-arbol', component: VistaArbolComponent },
  {path: 'editar-perfil', component: EditarPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
