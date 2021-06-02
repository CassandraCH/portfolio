import { Component, OnInit } from '@angular/core';
import {SkillsService} from "../../../services/skills.service";

@Component({
  selector: 'app-skills-box',
  templateUrl: './skills-box.component.html',
  styleUrls: ['./skills-box.component.scss']
})
export class SkillsBoxComponent implements OnInit {
  skills: any[];

   constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
     this.skills = this.skillsService.getSkills();
     console.log("skills OK");
     console.log(this.skills);
  }
}
