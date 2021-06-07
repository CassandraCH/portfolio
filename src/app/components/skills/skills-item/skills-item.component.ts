import {Component, Input} from '@angular/core';
import {Skill} from "../../../models/skill.models";

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent {
  // importation de l'item depuis le composant parent (skills-box)
  @Input() item: Skill;
}
