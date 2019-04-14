import { MovieInfoController } from "./movie-info.controller";
import './movie-info.styles.scss';

 export const MovieInfoComponent = {
  selector: 'movie-info',
  template: require('./movie-info.template.html'),
  controller: MovieInfoController
};
