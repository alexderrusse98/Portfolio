import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  showLine = false;

skills = [
  { id: 'html', label: 'HTML' },
  { id: 'css', label: 'CSS' },
  { id: 'js', label: 'JavaScript' },
  { id: 'ts', label: 'TypeScript' },
  { id: 'angular', label: 'Angular' },
  { id: 'firebase', label: 'Firebase' },
  { id: 'git', label: 'Git' },
  { id: 'restApi', label: 'REST-API' },
  { id: 'scrum', label: 'Scrum' },
  { id: 'material', label: 'Material Design' },
];

  ngOnInit() {
    setInterval(() => {
      this.showLine = true;
      setTimeout(() => this.showLine = false, 3000);
    }, 5000);
  }
}
