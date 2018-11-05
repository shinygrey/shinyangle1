import { Component } from '@angular/core';
import { TweetData, TwitterService } from './twitter.service';
import { MessageService } from '../messages/message.service';

@Component({
	selector: 'app-twitter',
	templateUrl: './twitter.component.html',
	styles: ['p{color:blue;} .error,.error *{color: red;']
})
export class TwitterComponent{
	error: any;
	headers: string[];
	tweet :TweetData;
	
	constructor(private requestTweets1: TwitterService){}
	
	ngOnInit(){
		/*this.requestTweets1.getTwitterData('User Timeline').subscribe((data: string) => console.log("twitter.component says: done getTwitterData\n"+data));*/
	}
	
	/*showTwitterApiResponse(){
		this.requestTweets1.getTwitterApiResponse().subscribe(resp => {
			const keys = resp.headers.keys();
			this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
			this.tweet = { ... resp.body };
		});*/

}

/*
this.content = undefined;
this.created_at = undefined;
this.username = undefined;
this.userscreen_name = undefined;
this.userfollowers_count = undefined;
this.userfriends_count = undefined;
this.userlisted_count = undefined;

*/

