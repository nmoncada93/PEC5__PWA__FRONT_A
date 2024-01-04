import { Component, OnInit } from '@angular/core';
import { Detail } from 'src/app/models/detail.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  list: Detail[] = [];
  viewMode: 'table' | 'cards' = 'table';
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.listService.getAllImages().subscribe((list) => (this.list = list));
  }

  switchViewMode(mode: 'table' | 'cards'): void {
    this.viewMode = mode;
  }
}
