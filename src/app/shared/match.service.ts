import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Match } from './match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  selectedMatch: Match;
  matches: Match[];
  readonly baseURL = 'http://localhost:3000/matches';

  constructor(private http: HttpClient) { }

  getMatchDetails() {
    return this.http.get(this.baseURL);
  }

}
