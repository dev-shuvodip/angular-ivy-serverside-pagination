import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { UserData } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiPaginationService {
  constructor(private httpClient: HttpClient) {}

  getUserData(page: number, limit: number): Observable<UserData> {
    const headers: HttpHeaders = new HttpHeaders({
      'app-id': '63496886128e409e1d1cec04',
    });

    const options = {
      headers: headers,
    };

    return this.httpClient.get<UserData>(
      `${environment.apiUrl}?page=${page}&limit=${limit}`,
      options
    );
  }
}
