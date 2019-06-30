import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import {AboutComponent} from './components/about/about.component';
<<<<<<< HEAD
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
=======
import {VistaArbolComponent} from "./components/vista-arbol/vista-arbol.component";
>>>>>>> origin/Palominos

const routes: Routes = [

  {path: '', component: MainComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'about', component: AboutComponent},
<<<<<<< HEAD
  {path: 'editar-perfil', component: EditarPerfilComponent}
=======
  {path: 'vista-arbol', component: VistaArbolComponent }

>>>>>>> origin/Palominos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
