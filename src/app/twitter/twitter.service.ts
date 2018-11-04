import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { sign } from 'crypto-browserify';

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

@Injectable()
export class TwitterService {

	constructor(private http: HttpClient){}

	method: string;
	
	getTwitterData(apiMethod: string){
		this.method = 'https://api.twitter.com/1.1/statuses/user_timeline.json'	
		return this.http.get(this.method,{responseType: 'json'});
	}
}