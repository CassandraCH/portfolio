import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/header/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from './shared/main-content/main-content.component';

import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';

import { SkillsComponent } from './skills/skills.component';
import { SkillsBoxComponent } from './skills/skills-box/skills-box.component';
import { SkillsItemComponent } from './skills/skills-item/skills-item.component';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectsItemComponent } from './projects/projects-item/projects-item.component';

import { ContactComponent } from './contact/contact.component';

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
