import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(
    private http: HttpClient
  ) { }

  getAllSuggestions(): Observable<object> {
    const url = `${environment.dataserviceUrl}/api/suggestion`;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(url, options);
  }

  getSuggestion(id: string): Observable<object> {
    const url = `${environment.dataserviceUrl}/api/suggestion/${id}`;
    return this.http.get(url);
  }

  insertSuggestion({title, description, email}): Observable<object>  {
    const url = `${environment.dataserviceUrl}/api/suggestion`;
    return this.http.post(url, { title, description, email });
  }

  addVoteToSuggestion({id}): Observable<object>  {
    const url = `${environment.dataserviceUrl}/api/suggestion/${id}/upvote`;
    return this.http.post(url, {});
  }
}
