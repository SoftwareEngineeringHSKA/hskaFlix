import { Component } from '@angular/core';
import { FilmService } from './film/service/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hskaFlix';

  filmList: any;

  constructor(private filmService: FilmService) {

  }

  ngOnInit(): void {
    // this.filmService.getFilme().subscribe(filme => {
    //   this.filmList = filme;
    //   console.log("filmList", this.filmList)
    // });

  }
}
