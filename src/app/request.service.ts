import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest,HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class RequestService{
	constructor(private http: HttpClient){}
	dataUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json"
	requestMethod: string = "GET";
	getData(){
		return this.http.get(this.dataUrl);
	}
	
	httpOptions = {
			'Accept':'*/*',
			'Connection':'close',
			'User-Agent':'OAuth gem v0.4.4',
			'Content-Type':'application/x-www-form-urlencoded',
			'Authorization': 'OAuth oauth_consumer_key="'+encodeURIComponent('key')+'", oauth_nonce="'+encodeURIComponent('key')+'", oauth_signature="'+encodeURIComponent('key')+'", oauth_signature_method="HMAC-SHA1", oauth_timestamp='+Date.now()+', oauth_token="'+encodeURIComponent('key')+'", oauth_version="1.0"',
			'Content-Length': '76',
			'Host':'api.twitter.com'
	};
}