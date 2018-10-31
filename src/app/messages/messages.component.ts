import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styles: [`button{display:inline-block;margin:1em;} h3{display:inline-block;}`]
})
export class MessagesComponent{
	constructor(public messageService: MessageService){}
}