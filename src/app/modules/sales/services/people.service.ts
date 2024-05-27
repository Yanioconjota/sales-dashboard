import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonDto } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrl: string = 'http://localhost:7000/Person';

  constructor(private http: HttpClient) { }

  getPeople(pageNumber: number = 1, pageSize: number = 10, orderBy: string = 'desc'): Observable<PersonDto[]> {
    const url = `${this.baseUrl}/GetPeople`;
    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
      .set('orderBy', orderBy);

    return this.http.get<PersonDto[]>(url, { params: params });
  }

  getPeopleByName(name: string): Observable<PersonDto[]> {
    const url = `${this.baseUrl}/GetPeopleByName`;
    let params = new HttpParams().set('name', name);
    return this.http.get<PersonDto[]>(url, { params });
  }

  getPersonById(id: number): Observable<PersonDto> {
    const url = `${this.baseUrl}/GetpersonById`;
    let params = new HttpParams().set('id', id.toString());
    return this.http.get<PersonDto>(url, { params: params });
  }

  addPerson(personDto: PersonDto): Observable<PersonDto> {
    const url = `${this.baseUrl}/AddPerson`;
    return this.http.post<PersonDto>(url, personDto);
  }

  updatePerson(id: number, person: PersonDto): Observable<any> {
    const url = `${this.baseUrl}/UpdatePerson`;
    return this.http.put(url, person, { params: { id: id.toString() } });
  }

  deletePerson(id: number): Observable<any> {
    const url = `${this.baseUrl}/DeletePerson/${id}`;
    return this.http.delete(url);
  }
}
