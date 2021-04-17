import { Component, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {


  filmList: any;
  imgPaths = [
    "https://k2k6p3n8.stackpathcdn.com/wp-content/uploads/2019/11/Petersdom-nach-Michelangelo-Titelbild-e1573651416763.jpg",
    "https://hhla.de/fileadmin/_processed_/0/3/csm_HHLA_Q3_4c5baa00aa.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91GrkIFgNdL._RI_.jpg",
    "https://cdn.pixabay.com/photo/2016/01/30/17/41/elephants-1170108_960_720.jpg",
    "https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/10/05/06/03/shakespeare-1716106_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/04/18/23/35/frog-2240764_960_720.jpg"
  ]
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }


  loadFilms(){
    console.log("filme laden")
    this.filmService.getFilme().subscribe(filme => {
      this.filmList = filme;
      console.log("filmList", this.filmList)
    });
  }
}
