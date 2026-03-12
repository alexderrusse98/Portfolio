import { Component } from '@angular/core';
import { AnimatedLineComponent } from '../../../shared/animated-line/animated-line.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AnimatedLineComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isCtaHovered = false;
}
