import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() link: string = '';

  onCardClick() {
    console.log('Card clicked:', this.title);
  }
}
