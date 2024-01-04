import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from '../models/detail.interface';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<Detail[]> {
    return this.http.get<Detail[]>('https://picsum.photos/v2/list');
  }

  getImageById(id: string): Observable<Detail> {
    return this.http.get<Detail>('https://picsum.photos/id/' + id + '/info');
  }
}
