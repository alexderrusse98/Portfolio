import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedLineComponent } from '../../../shared/animated-line/animated-line.component';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  imports: [CommonModule, AnimatedLineComponent],
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss'
})
export class ProjectPreviewComponent {

  projects = [
    {
      id: 1,
      title: 'Join',
      description: 'Dies ist ein kurzer Beispieltext als Platzhalter für Inhalte. Er zeigt, wie ein Abschnitt mit mehreren Zeilen aussehen kann. Der Text hat keine echte Bedeutung und dient nur zum Layouten.',
      imageUrl: 'assets/imgs/projects/join_notebook.png',
      imgExtra: 'assets/imgs/projects/full_sticker.png',
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      description: 'Dies ist ein kurzer Beispieltext als Platzhalter für Inhalte. Er zeigt, wie ein Abschnitt mit mehreren Zeilen aussehen kann. Der Text hat keine echte Bedeutung und dient nur zum Layouten.',
      imageUrl: 'assets/imgs/projects/El_Pollo_Locco.png',
      imgExtra: '',
    },
    {
      id: 3,
      title: 'Pokedex',
      description: 'Dies ist ein kurzer Beispieltext als Platzhalter für Inhalte. Er zeigt, wie ein Abschnitt mit mehreren Zeilen aussehen kann. Der Text hat keine echte Bedeutung und dient nur zum Layouten.',
      imageUrl: 'assets/imgs/projects/pokedex.png',
      imgExtra: '',
    }
  ]

}
