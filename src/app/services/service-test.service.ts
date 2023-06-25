import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  private url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

  constructor(private http: HttpClient) { 

  }

  getData(){
    return this.http.get(this.url);
  }
}
