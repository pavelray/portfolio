import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  private handleError(error: Response) {
  }
}
