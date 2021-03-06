import { Component, OnInit } from '@angular/core';
import {SkillsService} from "../../services/skills.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: any[];

  constructor(private skillsService: SkillsService) { }

  // récupération des compétences via le service où stockées les données
  ngOnInit(): void { this.skills = this.skillsService.getSkills(); }
}
