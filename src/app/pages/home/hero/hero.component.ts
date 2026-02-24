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

  words = {
    frontend: [...'frontend'],
    developer: [..."DEVELOPER"],
  };

  active: { word: string; index: number } | null = null;
  resetting = false;

  onHover(word: string, index: number) {
    const sameWord = this.active?.word === word;

    if (sameWord) {
      this.resetting = true;
      this.active = null;
      requestAnimationFrame(() => {
        this.resetting = false;
        this.active = { word, index };
      });
    } else {
      this.resetting = false;
      this.active = { word, index };
    }
  }

  onLeave() {
    this.active = null;
    this.resetting = false;
  }

  isActive(word: string, index: number): boolean {
    return this.active?.word === word && this.active?.index === index;
  }

  getChar(char: string, word: string, index: number): string {
    if (!this.isActive(word, index)) return char;
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }

  getTransform(word: string, index: number): string {
    if (!this.active || this.active.word !== word || this.resetting) return 'translateX(0)';
    if (word === 'developer') {
      return index < this.active.index ? 'translateX(-10px)' : 'translateX(0)';
    }
    return index > this.active.index ? 'translateX(32px)' : 'translateX(0)';
  }
}