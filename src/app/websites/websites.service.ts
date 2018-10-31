import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Website } from './website';
import { WEBSITES } from './mock-websites';

@Injectable({
	providedIn: 'root',
})
export class WebsitesService{

	constructor(){}

	getWebsites(): Observable<Website[]>{
		return of(WEBSITES);
	}
}