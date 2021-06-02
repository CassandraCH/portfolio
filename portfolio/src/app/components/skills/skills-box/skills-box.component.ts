import { Component, OnInit } from '@angular/core';
import {Skill} from "../../../models/skill.models";

@Component({
  selector: 'app-skills-box',
  templateUrl: './skills-box.component.html',
  styleUrls: ['./skills-box.component.scss']
})
export class SkillsBoxComponent implements OnInit {
  title: string = '';
  skills: Skill[] = [];

  constructor() {

  }

  ngOnInit(): void {
  }

}
