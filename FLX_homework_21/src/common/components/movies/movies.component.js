import { MoviesController } from "./movies.controller";
import './movies.styles.scss';

 export const MoviesComponent = {
  selector: 'movies', //как обращаться
  bindings: {
    movies: '<' // если знак <, то будем только получать. если = - то будем изменять значение в объкте массива
  },
  template: require(`./movies.template.html`),// используем код
  controller: MoviesController //образение к контроллеру
};
