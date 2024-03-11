import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule} from '@angular/material/core';
import { TrayectoriaComponent } from './components/trayectoria/trayectoria.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackComponent } from './components/snack/snack.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CarreteComponent } from './components/carrete/carrete.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TrayectoriaComponent,
    ContactoComponent,
    SnackComponent,
    ProyectosComponent,
    CarreteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage
    ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
