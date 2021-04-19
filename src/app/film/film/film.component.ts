import { Component } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { FilmService } from '../service/film.service';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.scss'],
})
export class FilmComponent {
    filmList: any;

    imgPaths = [
        'https://k2k6p3n8.stackpathcdn.com/wp-content/uploads/2019/11/Petersdom-nach-Michelangelo-Titelbild-e1573651416763.jpg',
        'https://hhla.de/fileadmin/_processed_/0/3/csm_HHLA_Q3_4c5baa00aa.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/91GrkIFgNdL._RI_.jpg',
        'https://cdn.pixabay.com/photo/2016/01/30/17/41/elephants-1170108_960_720.jpg',
        'https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_960_720.jpg',
        'https://m.media-amazon.com/images/M/MV5BZDg3MGNhYjItZGU2Yi00MzU4LWE4NGUtYjA2OTVjNGUyMjE4XkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_.jpg',
    ];

    constructor(private readonly filmService: FilmService) {}

    loadFilms() {
        this.filmService.getFilme().subscribe((filme) => {
            this.filmList = filme;
        });
    }
}
