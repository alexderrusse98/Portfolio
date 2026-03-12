import { Component } from '@angular/core';
import { AnimatedLineComponent } from '../../../shared/animated-line/animated-line.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AnimatedLineComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isCtaHovered = false;
}
