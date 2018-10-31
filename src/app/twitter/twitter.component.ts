import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import {Observable} from 'rxjs';

@Component({
  selector: 'app-twitter',
  template: '<p>twitter works!</p>',
  styles: ['p{color:blue;}']
})
export class TwitterComponent implements OnInit {

	constructor(/*private http:HttpClient*/){}
	ngOnInit(){/*
		this.tweets$ = this.http.get<Tweet[]>("/courses.json",{params}*/
	}

}
/*
tweetData['created_at']
tweetData['text']
tweetData['user']['name']
tweetData['user']['screen_name']
tweetData['user']['followers_count']
tweetData['user']['friends_count']
tweetData['user']['listed_count']

*/


/*
url = "https://api.twitter.com/1.1/statuses/user_timeline.json"; 
getData() {
	return this.http.get(this.url);
}
*/

/*User Timeline: https://api.twitter.com/1.1/statuses/user_timeline.json
All your tweets or the tweets of the user you specify.
Mentions: https://api.twitter.com/1.1/statuses/mentions_timeline.json
All the tweets in which another Twitter user mentions you.
Home Timeline: https://api.twitter.com/1.1/statuses/home_timeline.json
All the tweets from the people you follow
Twitter Search: https://api.twitter.com/1.1/search/tweets.json
A Twitter search with the query you specify.
*/


/*
import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import {Observable} from 'rxjs';

//https://developer.twitter.com/en/docs/tweets/timelines/api-reference/get-statuses-home_timeline
	const params = new HttpParams()
	.set('screen_name', 'shinygreyltd')
	.set('count', "5");
	
	interface Tweet{
	timeAndDate;
	content;
	author;
}

@Component({
  selector: 'app-twitter',
  template: '<p>twitter works!</p>',
  styles: ['p{color:blue;}']
})
export class TwitterComponent implements OnInit {
	tweets$: Observable<Tweet[]>;
	tweetData:Tweet;
	constructor(private http:HttpClient){}
	ngOnInit(){
		this.tweets$ = this.http.get<Tweet[]>("/courses.json",{params}
	}
	
	makeRequest() {
	this.RequestService.getData()
	.subscribe((data: Tweet) => this.tweetData = {
	heroesUrl: data['heroesUrl'],
	textfile:  data['textfile']
	});
}

}
*/