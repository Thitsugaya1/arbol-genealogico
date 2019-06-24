import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
