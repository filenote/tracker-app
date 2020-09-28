import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(
    private http: HttpClient
  ) { }

  getAllSuggestions() {
    let url = 'https://tracker-ds.azurewebsites.net/api/suggestion';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(url,options);
  }
}
