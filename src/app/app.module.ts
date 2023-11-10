import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { WhoIAmComponent } from './pages/who-i-am/who-i-am.component';
import { MyLenguagesComponent } from './pages/my-lenguages/my-lenguages.component';
import { ColaborateCompaniesComponent } from './pages/colaborate-companies/colaborate-companies.component';
import { FooterComponent } from './pages/footer/footer.component';
import {MatIconModule} from '@angular/material/icon'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailService } from './services/email-provide.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingPageComponent,
    WhoIAmComponent,
    MyLenguagesComponent,
    ColaborateCompaniesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    library.add(fas, fab); // Adicione os conjuntos de ícones que você deseja usar (ícones sólidos e ícones de marcas)
  }
}
