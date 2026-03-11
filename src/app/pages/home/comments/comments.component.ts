import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedLineComponent } from '../../../shared/animated-line/animated-line.component';


@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, AnimatedLineComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

  comments = [
    {
      id: 1,
      text: 'Great portfolio! Very impressive work.',
      name: 'John Doe',
      job: 'Frontend Developer',
      linkInd: '',
      img: 'assets/imgs/comments/A.png'
    },
    {
      id: 2,
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc varius commodo.',
      name: 'Dennis Smith',
      job: 'Frontend Developer',
      linkInd: '',
      img: 'assets/imgs/comments/B.png'
    },
    {
      id: 3,
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc varius commodo.',
      name: 'Lucie Brown',
      job: 'Frontend Developer',
      linkInd: '',
      img: 'assets/imgs/comments/A.png'
    },

  ];

}
