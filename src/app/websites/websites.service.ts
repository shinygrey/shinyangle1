import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Website } from './website';
import { WEBSITES } from './mock-websites';
import { MessageService } from '../messages/message.service';

@Injectable({
	providedIn: 'root',
})
export class WebsitesService{

	constructor(private messageService: MessageService){}

	getWebsites(): Observable<Website[]>{
		this.messageService.add('WebsitesService: fetched websites');
		return of(WEBSITES);
	}
}