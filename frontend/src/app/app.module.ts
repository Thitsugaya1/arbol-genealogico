import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { VerArbolComponent } from './ver-arbol/ver-arbol.component';
import { GestionArbolComponent } from './gestion-arbol/gestion-arbol.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    IniciarSesionComponent,
    VerArbolComponent,
    GestionArbolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
