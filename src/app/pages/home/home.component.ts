import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectPreviewComponent,
    CommentsComponent,
    ContactComponent
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
