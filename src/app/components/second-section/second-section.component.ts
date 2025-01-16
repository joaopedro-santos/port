import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../shared/components/cards/cards.component';

@Component({
  selector: 'app-second-section',
  imports: [CommonModule, CardsComponent],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.scss',
})
export class SecondSectionComponent implements OnInit {
  projects: any[] = new Array(3).fill({
    id: -1,
    title: '',
    description: '',
    image: '',
    link: '',
  });
  ngOnInit(): void {
    this.projects[0] = {
      id: 0,
      link: 'https://www.google.com',
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2021/09/10/demon-slayer-capa.png',
    };
    this.projects[1] = {
      id: 1,
      link: 'https://www.google.com',
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2021/09/10/demon-slayer-capa.png',
    };
    this.projects[2] = {
      id: 2,
      link: 'https://www.google.com',
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2021/09/10/demon-slayer-capa.png',
    };
    this.projects[3] = {
      id: 3,
      link: 'https://www.google.com',
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2021/09/10/demon-slayer-capa.png',
    };
    this.projects[4] = {
      id: 4,
      link: 'https://www.google.com',
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2021/09/10/demon-slayer-capa.png',
    };
    this.projects[5] = {
      id: 5,
      link: 'https://www.google.com',
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:
        'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2021/09/10/demon-slayer-capa.png',
    };
  }
}
