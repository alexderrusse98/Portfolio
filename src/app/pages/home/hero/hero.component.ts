import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  frontendChars = 'rontend'.split(''); 
  developerChars = 'DEVELOPER'.split('');

  activeWord: 'frontend' | 'developer' | null = null;
  activeIndex: number | null = null;
  resetting = false;

  onHover(word: 'frontend' | 'developer', index: number) {
    if (this.activeWord !== word) {
      this.activeWord = word;
      this.activeIndex = index;
      this.resetting = false;
      return;
    }

    this.resetting = true;
    this.activeIndex = null;

    requestAnimationFrame(() => {
      this.resetting = false;
      this.activeIndex = index;
    });
  }

  onLeave() {
    this.activeWord = null;
    this.activeIndex = null;
    this.resetting = false;
  }

 getChar(char: string, word: 'frontend' | 'developer', index: number): string {
  if (this.activeWord === word && this.activeIndex === index) {
    return char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase();
  }
  return char;
}

  getTransform(word: 'frontend' | 'developer', index: number): string {
    if (
      this.activeWord !== word ||
      this.activeIndex === null ||
      this.resetting
    ) {
      return 'translateX(0)';
    }

    if (index > this.activeIndex) {
      return 'translateX(32px)';
    }

    return 'translateX(0)';
  }
}