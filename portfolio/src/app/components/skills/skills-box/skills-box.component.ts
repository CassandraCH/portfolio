import { Component, Input, OnInit } from '@angular/core';
import {Skill} from "../../../models/skill.models";

@Component({
  selector: 'app-skills-box',
  templateUrl: './skills-box.component.html',
  styleUrls: ['./skills-box.component.scss']
})
export class SkillsBoxComponent implements OnInit {
  @Input() name: string;
  @Input() list: Skill[];

  isSup: boolean;

   constructor() {
     this.name = '';
     this.list = [];
   }

  ngOnInit(): void {
    this.isSup = this.list.length > 3;
  }
}
