import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "../../../models/skill.models";

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.scss']
})
export class SkillsItemComponent implements OnInit {

  @Input() item: Skill;

  constructor() { }

  ngOnInit(): void { }

}
