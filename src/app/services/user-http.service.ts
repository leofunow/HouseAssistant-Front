import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    if(error.status === 401){
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getPage(page?: number, sort?: string, sortDirection?: number, status?: string[], field?: string[], district?: string[], type?: string[], maxArea?:number, minArea?:number, address?: string){
    return firstValueFrom(this.http.post('http://localhost:3000/api/page', {
      page: page,
      sort: sort,
      sortDirection: sortDirection,
      status: status,
      field: field,
      district: district,
      type: type,
      maxArea: maxArea,
      minArea: minArea,
      address: address
    },
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
      retry(3),
      catchError(this.errorHandler)
    ))
  }

  login(email: string, password: string){
    return firstValueFrom(this.http.post('http://localhost:3000/api/user/login', {email: email, password: password},
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
      retry(3),
      catchError(this.errorHandler)
    ))
  }

  addMeeting(obj: any){
    return firstValueFrom(this.http.post('http://localhost:3000/api/addMeeting', obj,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
      retry(3),
      catchError(this.errorHandler)
    ))
  }


  setRes(id: string, res: string){
    return firstValueFrom(this.http.put('http://localhost:3000/api/setRes/' + id, {res: res},
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
      retry(3),
      catchError(this.errorHandler)
    ))
  }

  getMeetingsPage(page?: number){
    return firstValueFrom(this.http.post('http://localhost:3000/api/getMeetings/', {page: page},
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
      retry(3),
      catchError(this.errorHandler)
    ))
  }

  getObjectsByName(name: string){
    return firstValueFrom(this.http.post('http://localhost:3000/api/findObject', {text: name},
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
      retry(3),
      catchError(this.errorHandler)
    ))
  }

  getUserByName(name: string){
    return firstValueFrom(this.http.post(`http://localhost:3000/api/findUser`, {name: name},
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
      retry(3),
      catchError(this.errorHandler)
    ))
  }

  getFilters(){
    return firstValueFrom(this.http.get('http://localhost:3000/api/filter',
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
      retry(3),
      catchError(this.errorHandler)
    ))
  }

  getObject(id: string){
    return firstValueFrom(this.http.get(`http://localhost:3000/api/object/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
      retry(3),
      catchError(this.errorHandler)
    ))
  }

  addCard(formData: FormData){
    return firstValueFrom(this.http.post('http://localhost:3000/api/newobject', formData,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
      retry(3),
      catchError(this.errorHandler)
    ))
  }

  getUser(id: string){
    return firstValueFrom(this.http.get(`http://localhost:3000/api/user/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).pipe(
      retry(3),
      catchError(this.errorHandler)
    ))
  }

}
