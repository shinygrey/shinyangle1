import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../messages/message.service';

@Injectable({
	providedIn: 'root',
})
export class HeroService {

	constructor(private messageService: MessageService){}

	getHeroes(displaymessage: string): Observable<Hero[]> {
		// TODO: send the message _after_ fetching the heroes
		this.messageService.add(displaymessage);
		return of(HEROES);
	}
}

