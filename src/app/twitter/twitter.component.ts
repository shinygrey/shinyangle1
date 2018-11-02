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
	
		
	constructor(private tweetService1: TwitterService){}
	
	showTweets(){
		this.tweetService1.getTweets().subscribe((data: TweetData) => this.tweet = { ...data });
	}
	
	showTwitterApiResponse(){
		this.tweetService1.getTwitterApiResponse().subscribe(resp => {
			const keys = resp.headers.keys();
			this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
			this.tweet = { ... resp.body };
		});
	}
}

/*
this.content = undefined;
this.created_at = undefined;
this.username = undefined;
this.userscreen_name = undefined;
this.userfollowers_count = undefined;
this.userfriends_count = undefined;
this.userlisted_count = undefined;

tweetData['created_at']
tweetData['text']
tweetData['user']['name']
tweetData['user']['screen_name']
tweetData['user']['followers_count']
tweetData['user']['friends_count']
tweetData['user']['listed_count']
*/

