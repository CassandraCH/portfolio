import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/project.models";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public slides: Project[] = [
    {
      image: 'assets/projets/projet.png',
      name: 'NOM DU PROJET 1',
      type: 'Projet Scolaire',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: 'Angular | Node.js | Express | MongoDB',
      link: 'https://github.com/CassandraCH'
    },
    {
      image: 'assets/projets/projet.png',
      name: 'NOM DU PROJET 2',
      type: 'Projet Scolaire',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: 'Angular | Node.js | Express | MongoDB',
      link: 'https://github.com/CassandraCH'
    },
    {
      image: 'assets/projets/projet.png',
      name: 'NOM DU PROJET 3',
      type: 'Projet Scolaire',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: 'Angular | Node.js | Express | MongoDB',
      link: 'https://github.com/CassandraCH'
    },
  ]

  constructor() {

    this.numbers = Array(this.slides.length).fill(0).map((x, i) =>i);
  }

  currentSlide = 0;
  numbers: number[];


  ngOnInit(): void {
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
