import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { UserInterface } from '../models/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  registerUser(nombres: string, apellidoPaterno: string, apellidoMaterno: string, email: string, password: string){
    const urlApi = 'http://localhost:8000/api/register';
    return this.http.post<UserInterface>(urlApi,
      {nombres, apellidoPaterno, apellidoMaterno, email, password},
      {headers: this.headers}
      ).pipe(map(data => data));
  }

  loginUser(email: string, password: string): Observable<any> {
    const urlApi = 'http://localhost:8000/api/register';
    return this.http.post<UserInterface>(urlApi,
      {email, password},
      {headers: this.headers})
      .pipe(map(data => data));
  }

  setUser(user: UserInterface): void {
    const userString = JSON.stringify(user);
    localStorage.setItem('currentUser', userString);
  }

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  getCurrentUser(): UserInterface {
    const userString = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(userString)) {
      return JSON.parse(userString);
    } else {
      return null;
    }
  }

  logoutUser() {
    const accessToken = localStorage.getItem('accessToken');
    const urlApi = 'http://localhost:8000/api/logout';
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    return this.http.post<UserInterface>(urlApi,
      {headers: this.headers}
      );
  }


}
