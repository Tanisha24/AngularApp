import { Injectable } from '@angular/core';

import { GeoJson } from '../shared/map';
import * as mapboxgl from 'mapbox-gl';
import { environment} from '../../environments/environment';


declare var L:any;
declare var omnivore:any;
@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() {
  //mapboxgl.accessToken = environment.accessToken;
//Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.accessToken);

}
}
