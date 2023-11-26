import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() link?: string;
  @Input() title?: string;
  @Input() image?: string;
  @Input() description?: string;
}
