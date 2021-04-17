import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private readonly serverAdr = 'https://localhost:';
  private readonly serverPort = '3000';
  private readonly apiPath = '/api/filme';

  private readonly serverBaseUri = this.serverAdr + this.serverPort + this.apiPath;

  constructor(private httpClient: HttpClient) { }



  getFilme() {
    console.log('Service: getFilme()', this.serverBaseUri);
    return this.httpClient.get(this.serverBaseUri)
      .pipe(
        map(chases => {
          return chases;
        }),
        catchError(error => {
          return error;
        })
      )
  }
}
