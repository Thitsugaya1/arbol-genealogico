import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
// Services
import { DataApiService } from './services/data-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { ModificarArbolComponent } from './components/modificar-arbol/modificar-arbol.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    AboutComponent,
    EditarPerfilComponent,
    ModificarArbolComponent
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
