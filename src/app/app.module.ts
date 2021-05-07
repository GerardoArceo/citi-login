import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from './utilities/material-module';
import { UserbarComponent } from './components/userbar/userbar.component';
import { DialogComponent } from './components/modal/dialog/dialog.component';
import { ModalComponent } from './components/modal/modal.component';
import { PopupComponent } from './components/modal/popup/popup.component';
import { LoginNominaComponent } from './components/modal/login-nomina/login-nomina.component';
import { ControlesModule } from './controles/controles.module';
import { SeleccionComponent } from './components/modal/seleccion/seleccion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    UserbarComponent,
    FootbarComponent,
    LoginComponent,
    DialogComponent,
    ModalComponent,
    SeleccionComponent,
    PopupComponent,
    LoginNominaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ControlesModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
