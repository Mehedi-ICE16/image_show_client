import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  rootUrl = 'http://localhost:3000/pdf';
  constructor(private api:HttpClient) { }

  getUser(accNo:string) {
    return this.api.get(this.rootUrl+'/:'+accNo);
  }
}
