import { Injectable } from '@angular/core';
import {Project} from "../models/project.models";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [
    {
      image: 'assets/projets/cooking-chief.png',
      name: 'Cooking Chief',
      type: 'Projet Scolaire',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['Angular', 'MongoDB', 'Node.js', 'Express', 'CSS3', 'HTML5'],
      link: 'https://github.com/CassandraCH/Cooking-Chief'
    },
    {
      image: 'assets/projets/nurikabe.png',
      name: 'Nurikabe',
      type: 'Projet Scolaire',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['Ruby', 'GTK3'],
      link: 'https://github.com/CassandraCH/Nurikabe'
    },
    {
      image: 'assets/projets/jeu-de-la-vie.png',
      name: 'Jeu de la vie',
      type: 'Projet Scolaire',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['Java', 'Swing'],
      link: 'https://github.com/CassandraCH/jeu-de-la-vie'
    },
    {
      image: 'assets/projets/portfolio-v1.png',
      name: 'Portfolio 1.0',
      type: 'Projet Personnel',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://github.com/CassandraCH/portfolio-v1'
    },
    {
      image: 'assets/projets/appli-chat.png',
      name: 'Application de Chat',
      type: 'Projet Scolaire',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['Java', 'Swing'],
      link: 'https://github.com/CassandraCH/application-chat'
    },
    {
      image: 'assets/projets/site-cuisine.png',
      name: 'Site de cuisine',
      type: 'Projet Personnel',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://github.com/CassandraCH/Projet-site-cuisine'
    },
    {
      image: 'assets/projets/beauty-savior.png',
      name: 'Beauty Savior',
      type: 'Projet Scolaire',
      informations: 'In purus est, mattis eget, imperdiet nec, fermentum congue, tortor. Aenean ut nibh. Nullam hendrerit viverra dolor. Vestibulum fringilla, lectus id viverra malesuada, enim mi adipiscing ligula, et bibendum lacus lectus id sem. ',
      technologies: ['C', 'SDL2'],
      link: 'https://github.com/CassandraCH/beauty-savior'
    }
  ];

  getProjects() { return this.projects; }
}
