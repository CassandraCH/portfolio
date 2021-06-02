import { Injectable } from '@angular/core';
import {Skill} from "../models/skill.models";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skills: {name: string, list: Skill[]}[] = [
    {
      name: "Développement Web",
      list: [
        { name: "HTML5", logo: "../assets/logos/logo_html.png" },
        { name: "CSS3", logo: "../assets/logos/logo_css.png" },
        { name: "JavaScript", logo: "../assets/logos/logo_js.png" },
        { name: "Angular", logo: "../assets/logos/logo_angular.png" }
      ]
    }, {
      name: "Développement Logiciel",
      list: [
        { name: "C", logo: "../assets/logos/logo_c.png" },
        { name: "Java", logo: "../assets/logos/logo_java.png" },
        { name:  "Ruby", logo: "../assets/logos/logo_ruby.png" }
      ]
    }, {
      name: "Base de données",
      list: [
        { name: "MongoDB", logo: "../assets/logos/logo_mongo.png" },
        { name: "MySQL", logo: "../assets/logos/logo_mysql.png" },
        { name:  "PostgreSQL", logo: "../assets/logos/logo_postgre.png" }
      ]
    }, {
      name: "Outils",
      list: [
        { name: "Git", logo: "../assets/logos/logo_git.png" },
        { name: "Github", logo: "../assets/logos/logo_github.png" },
        { name:  "VSCode", logo: "../assets/logos/logo_vscode.png" },
        { name:  "IntelliJ", logo: "../assets/logos/logo_intellij.png" },
        { name:  "UML", logo: "../assets/logos/logo_uml.png" }
      ]
    }
  ]



  constructor() {
  }

  getSkills() {
    return this.skills;
  }
}
