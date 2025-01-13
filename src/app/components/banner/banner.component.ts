import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
  CarouselModule,
} from '@coreui/angular';

@Component({
  selector: 'app-banner',
  imports: [
    CommonModule,
    ButtonComponent,
    CarouselCaptionComponent,
    CarouselComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    ThemeDirective,
    RouterLink,
    CarouselModule,
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent implements OnInit {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2021/09/10/demon-slayer-capa.png',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    };
    this.slides[1] = {
      id: 1,
      src: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2021/09/10/demon-slayer-capa.png',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };
    this.slides[2] = {
      id: 2,
      src: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2021/09/10/demon-slayer-capa.png',
      title: 'Third slide',
      subtitle:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    };
  }
}
