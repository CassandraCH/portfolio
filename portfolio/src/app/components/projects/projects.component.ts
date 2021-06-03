import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../services/projects.service";
import {Project} from "../../models/project.models";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  private slides: Project[];

  constructor(private projectsService: ProjectsService) {
    this.numbers = Array(this.slides.length).fill(0).map((x, i) =>i);
  }

  currentSlide = 0;
  numbers: number[];


  ngOnInit(): void {
    this.slides = this.projectsService.getProjects();
  }

  onPrevClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1: previous;
    console.log('Slide precedente : ', this.currentSlide);

  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log('Slide suivante', this.currentSlide);
  }
}
