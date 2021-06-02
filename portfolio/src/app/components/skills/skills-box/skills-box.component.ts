import { Component, Input, OnInit } from '@angular/core';
import {Skill} from "../../../models/skill.models";

@Component({
  selector: 'app-skills-box',
  templateUrl: './skills-box.component.html',
  styleUrls: ['./skills-box.component.scss']
})
export class SkillsBoxComponent implements OnInit {
  // importation du nom du domaine de compétences et la liste de compétences correspondante depuis le component parent (skills)
  @Input() name: string;
  @Input() list: Skill[];

  isSup: boolean; // booléen qui permet de d'appliquer la classe css correspondante au nombre

   constructor() {
     this.name = '';
     this.list = [];
   }

  ngOnInit(): void { this.isSup = this.list.length > 3; }
}
