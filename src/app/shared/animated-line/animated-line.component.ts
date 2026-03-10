import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-line.component.html',
  styleUrl: './animated-line.component.scss'
})

export class AnimatedLineComponent implements OnInit, OnDestroy {
  @Input() imageSrc: string = '';
  isVisible = false;
  private interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.isVisible = !this.isVisible;
    }, 2000);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }
}