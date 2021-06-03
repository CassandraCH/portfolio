import {Component, Input} from '@angular/core';
import {Project} from "../../../models/project.models";

@Component({
  selector: 'app-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.scss']
})
export class ProjectsItemComponent {
  @Input() project: Project;
}
