import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  // Use https://dogapi.dog/api/v2/facts to fecth dog facts, only one fact is returned per request
  // hint: use one of rxjs operators to repeat the call and get number of facts specified by limit param

  constructor() { }
}
