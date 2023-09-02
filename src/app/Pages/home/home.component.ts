import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  list: any = [
    {
      name: 'Movie title 1',
      description:
        " 1 Movie Description some quick example text to build on the card title and make up the bulk of the card's content.",
      src: 'data:image/jpeg;base64,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',
    },
    {
      name: 'Movie title 2',
      description:
        " 2 Movie Description some quick example text to build on the card title and make up the bulk of the card's content.",
      src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411',
    },
    {
      name: 'Movie title 2',
      description:
        " 2 Movie Description some quick example text to build on the card title and make up the bulk of the card's content.",
      src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411',
    },
    {
      name: 'Movie title 2',
      description:
        " 2 Movie Description some quick example text to build on the card title and make up the bulk of the card's content.",
      src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411',
    },
    {
      name: 'Movie title 2',
      description:
        " 2 Movie Description some quick example text to build on the card title and make up the bulk of the card's content.",
      src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411',
    },
    {
      name: 'Movie title 2',
      description:
        " 2 Movie Description some quick example text to build on the card title and make up the bulk of the card's content.",
      src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411',
    },
    {
      name: 'Movie title 2',
      description:
        " 2 Movie Description some quick example text to build on the card title and make up the bulk of the card's content.",
      src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411',
    },
    {
      name: 'Movie title 2',
      description:
        " 2 Movie Description some quick example text to build on the card title and make up the bulk of the card's content.",
      src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411',
    },
    {
      name: 'Movie title 2',
      description:
        " 2 Movie Description some quick example text to build on the card title and make up the bulk of the card's content.",
      src: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411',
    },
  ];
}
