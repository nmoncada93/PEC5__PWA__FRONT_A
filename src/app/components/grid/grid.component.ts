import { Component, Input } from '@angular/core';
import { Detail } from 'src/app/models/detail.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() list: Detail[] = [];
}
