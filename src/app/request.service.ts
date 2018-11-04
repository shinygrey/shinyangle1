import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest,HttpHeaders } from '@angular/common/http';
import { Observable, of, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class RequestService{
	
	constructor(private http: HttpClient){}
	
	getBackEndVariable() {
		return this.http.get(window.location.origin + '/backend',{responseType: 'text'});
	}
	
	clickEventsForTesting(){
		var clicksource = fromEvent(document, 'click'); //create observable that emits click events
		var clickexample = clicksource.pipe(map(event => `Event time: ${event.timeStamp}`)); //map to string with given event timestamp
		clickexample.subscribe(val => console.log(val));
	}
}