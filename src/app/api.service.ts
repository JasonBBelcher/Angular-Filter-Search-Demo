import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `https://jsonplaceholder.typicode.com/users`;
  }

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }
}
