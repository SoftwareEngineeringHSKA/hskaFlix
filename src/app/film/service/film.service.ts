import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FilmService {
    private readonly serverAdr = 'https://localhost:';

    private readonly serverPort = '3000';

    private readonly apiPath = '/api/filme';

    private readonly serverBaseUri =
        this.serverAdr + this.serverPort + this.apiPath;

    constructor(private readonly httpClient: HttpClient) {}

    getFilme() {
        // eslint-disable-next-line security-node/detect-crlf
        console.log('Service: getFilme()', this.serverBaseUri);
        return this.httpClient.get(this.serverBaseUri).pipe(
            map((chases) => chases),
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            catchError((error) => error),
        );
    }
}
