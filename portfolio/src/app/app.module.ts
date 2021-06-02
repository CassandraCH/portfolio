import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

// Imports des components
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/header/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from './shared/main-content/main-content.component';

import { HomeComponent } from './components/home/home.component';

import { AboutComponent } from './components/about/about.component';

import { SkillsComponent } from './components/skills/skills.component';
import { SkillsBoxComponent } from './components/skills/skills-box/skills-box.component';
import { SkillsItemComponent } from './components/skills/skills-item/skills-item.component';

import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsItemComponent } from './components/projects/projects-item/projects-item.component';

import { ContactComponent } from './components/contact/contact.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

// Imports des services
import {SkillsService} from "./services/skills.service";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    MainContentComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    SkillsBoxComponent,
    SkillsItemComponent,
    ProjectsComponent,
    ProjectsItemComponent,
    ContactComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    SkillsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
