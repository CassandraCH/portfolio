import { Injectable } from '@angular/core';
import {Project} from "../models/project.models";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [

  ];

  constructor() { }
}
