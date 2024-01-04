import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from 'src/app/models/detail.interface';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  detail: Detail | null = null;
  expanded: boolean = false;
  constructor(
    private listService: ListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    if (!identifier) {
      console.error('ID not provided');
      this.router.navigateByUrl('/');
      return;
    }
    console.log('Identifier --> ', identifier);

    this.listService.getImageById(identifier).subscribe(
      (detail) => {
        if (!detail) {
          console.error('Image not found');
          this.router.navigateByUrl('/');
          return;
        }
        this.detail = detail;
        console.log('Image --> ', this.detail);
      },
      (error) => {
        console.error('Error fetching image details: ', error);
        this.router.navigateByUrl('/');
      }
    );
  }

  expandDetailsPanel(): void {
    this.expanded = !this.expanded;
  }
}
