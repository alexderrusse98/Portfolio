import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedLineComponent } from '../../../shared/animated-line/animated-line.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, AnimatedLineComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

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


  peelState: 'closed' | 'half' | 'open' = 'closed';

  onPeel() {
    if (this.peelState === 'closed') {
      this.peelState = 'half';
      setTimeout(() => this.peelState = 'open', 100); 
    }
    if (this.peelState === 'open') {
      this.peelState = 'closed';
    }
  }
}
