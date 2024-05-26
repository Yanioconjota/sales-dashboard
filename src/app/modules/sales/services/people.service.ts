import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersonDto } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrl: string = 'http://localhost:7000/Person/GetPeople';

  constructor(private http: HttpClient) { }

  getPeople(pageNumber: number = 1, pageSize: number = 10, orderBy: string = 'desc'): Observable<IPersonDto[]> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
      .set('orderBy', orderBy);

    return this.http.get<IPersonDto[]>(this.baseUrl, { params: params });
  }
}
