import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private _httpClient: HttpClient) {

  }

  getData(): Observable<any> {
    return this._httpClient.get(apiUrl);
  }

}
