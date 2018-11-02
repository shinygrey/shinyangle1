import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

export interface TweetData{
	content: string;
	userscreen_name: string;
	/*
	created_at: string;
	username: string;
	userfollowers_count;
	userfriends_count;
	userlisted_count;
	*/
}

/*
process.env.TWITTER__ACCESS_TOKEN_SECRET
encodeURIComponent(process.env.TWITTER_CONSUMER_KEY)
process.env.TWITTER_CONSUMER_SECRET

'Authorization: OAuth oauth_consumer_key="'+encodeURIComponent(process.env.TWITTER_CONSUMER_KEY)+'", oauth_nonce="'+Date.now()+'", oauth_signature_method="HMAC-SHA1", oauth_token="'+encodeURIComponent(process.env.TWITTER__ACCESS_TOKEN)+'", oauth_timestamp="'+Date.now()+'", oauth_version="1.0", oauth_signature="WORKING_ON)IT"'
*/



@Injectable()
export class TwitterService {
	urlUserTimeline = ' https://api.twitter.com/1.1/statuses/user_timeline.json'; //All your tweets or the tweets of the user you specify.
	urlMentions = 'https://api.twitter.com/1.1/statuses/mentions_timeline.json'; //All the tweets in which another Twitter user mentions you.
	urlHomeTimeline = 'https://api.twitter.com/1.1/statuses/home_timeline.json' //All the tweets from the people you follow
	urlTwitterSearch = 'https://api.twitter.com/1.1/search/tweets.json' //A Twitter search with the query you specify.
	
	constructor(private http: HttpClient){}
	
	getTweets(){
		return this.http.get<TweetData>(this.urlUserTimeline);
	}
	
	getTwitterApiResponse(): Observable<HttpResponse<TweetData>>{
		return this.http.get<TweetData>(
			this.urlUserTimeline, { observe: 'response' }
		);
	}
}





