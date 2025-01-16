import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { SecondSectionComponent } from '../../components/second-section/second-section.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, SecondSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
