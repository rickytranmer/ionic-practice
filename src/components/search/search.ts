import { Component } from '@angular/core';
import { Http } from '@angular/http';

/**
 * Generated class for the SearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {

  results = {};

  findCharacter(name) {
  	console.log(`finding ${name}`);
  	this.http.get('https://swapi.co/api/people/?search='+name)
  		.toPromise()
  		.then( (res)=> this.results = (res.json().results) );
  }

  constructor(private http :Http) {
    console.log('Hello SearchComponent Component');
    this.text = 'Hello World';
  }

}
