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
<<<<<<< HEAD
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

>>>>>>> origin/Navarro

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    AboutComponent,
    EditarPerfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    DataApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
