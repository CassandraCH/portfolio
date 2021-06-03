import { Injectable } from '@angular/core';
import {Project} from "../models/project.models";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [
    {
      image: 'assets/projets/projet.png',
      name: 'Cooking Chief',
      type: 'Projet Scolaire',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['Angular', 'MongoDB', 'Node.js', 'Express', 'CSS3', 'HTML5'],
      link: 'https://github.com/CassandraCH/Cooking-Chief'
    },
    {
      image: 'assets/projets/projet.png',
      name: 'Nurikabe',
      type: 'Projet Scolaire',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['Ruby', 'GTK3'],
      link: 'https://github.com/CassandraCH/Nurikabe'
    },
    {
      image: 'assets/projets/projet.png',
      name: 'Jeu de la vie',
      type: 'Projet Scolaire',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['Java', 'Swing'],
      link: 'https://github.com/CassandraCH/jeu-de-la-vie'
    },
    {
      image: 'assets/projets/projet.png',
      name: 'Première version du Portfolio',
      type: 'Projet Personnel',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://github.com/CassandraCH/portfolio-v1'
    },
    {
      image: 'assets/projets/projet.png',
      name: 'Application de Chat',
      type: 'Projet Scolaire',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['Java', 'Swing'],
      link: 'https://github.com/CassandraCH/application-chat'
    },
    {
      image: 'assets/projets/projet.png',
      name: 'Site de cuisine',
      type: 'Projet Personnel',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://github.com/CassandraCH/Projet-site-cuisine'
    },
    {
      image: 'assets/projets/projet.png',
      name: 'Beauty Savior',
      type: 'Projet Scolaire',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['C', 'SDL2'],
      link: 'https://github.com/CassandraCH/beauty-savior'
    }
  ];

  getProjects() { return this.projects; }
}
