import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Suggestion } from '../datamodel/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(
    private http: HttpClient
  ) { }

  getAllSuggestions() {
    let url = environment.dataserviceUrl + '/api/suggestion';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(url,options);
  }

  insertSuggestion({title, description, email}) {
    let url = environment.dataserviceUrl + '/api/suggestion';
    return this.http.post(url, 
      {
        title: title,
        description: description,
        email: email
      });
  }
  // insertSuggestion(suggestion: Suggestion) {
  //   let url = environment.dataserviceUrl + '/api/suggestion';
    
  //   return this.http.post(url, suggestion);
  // }
}
