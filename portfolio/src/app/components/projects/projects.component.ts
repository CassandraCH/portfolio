import { Component } from '@angular/core';
import { ProjectsService } from "../../services/projects.service";
import { Project } from "../../models/project.models";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent  {

  // récupération des projets via le service
  slides: Project[] = this.projectsService.getProjects();
  // index du projet actuellement affiché
  currentSlide = 0;
  // permet de gérer les index
  numbers: number[];

  constructor(private projectsService: ProjectsService) {
    this.numbers = Array(this.slides.length).fill(0).map((x, i) =>i);
  }

  // méthode qui permet de passer au slide précédent
  onPrevClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1: previous;
    console.log('Slide precedente : ', this.currentSlide);

  }

  // méthode qui permet de passer au slide suivant
  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log('Slide suivante', this.currentSlide);
  }

  // // méthode qui permet de passer au slide correspond au numéro du dot cliqué
  onIndexClick(i: number) { this.currentSlide = i; }
}
