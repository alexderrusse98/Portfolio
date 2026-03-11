import { Component } from '@angular/core';
import { AnimatedLineComponent } from '../animated-line/animated-line.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AnimatedLineComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isHovered = false;
}
