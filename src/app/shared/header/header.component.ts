import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isHovered = false;
  hoveredLink: string | null = null;
  lang: 'EN' | 'DE' = 'EN';

  navLinks = [
    { id: 'about_me', label: 'About me', route: '/about' },
    { id: 'skills', label: 'Skills', route: '/skills' },
    { id: 'projects', label: 'Projects', route: '/projects' },
    { id: 'contact', label: 'Ready to work', route: '/ready-to-work' },
  ];


  hoveredLang: 'EN' | 'DE' | null = null;

  setLang(lang: 'EN' | 'DE') {
    this.lang = lang;
  }
}