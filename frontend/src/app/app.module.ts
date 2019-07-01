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
import { VistaArbolComponent } from "./components/vista-arbol/vista-arbol.component";
import { BotonComponent } from './components/boton/boton.component';
import { MatDialogModule, MatButtonModule, MatCheckboxModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    AboutComponent,
    VistaArbolComponent,
    BotonComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule
  ],
  entryComponents: [DialogComponent],
  providers: [
    DataApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
