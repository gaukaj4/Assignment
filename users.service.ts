import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class usersService {

  constructor(private http:HttpClient) { }


  url:string="http://localhost:/3000/Users"
  getUsers(){
    return this.http.get<Users[]>(this.url);
  }
}
