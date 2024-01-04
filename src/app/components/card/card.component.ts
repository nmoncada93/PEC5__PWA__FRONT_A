import { Component, Input } from '@angular/core';
import { Detail } from 'src/app/models/detail.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() detail: Detail | null = null;
}
