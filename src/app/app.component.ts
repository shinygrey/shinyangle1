import { Component } from '@angular/core';
import { RequestService } from './request.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	constructor(private requests: RequestService){}
	jsonDataFromBackend;
	ngOnInit(){
		this.requests.getBackEndVariable().subscribe((data: string) => console.log("app.component.ts says: GET successful\n");
		
		try{
			this.jsonDataFromBackend = JSON.parse(data);
		}catch(error){console.error(error);}
		
		);
		try{
			console.log(this.jsonDataFromBackend.total);
		}catch(error){console.error(error);}
	}
	
	title = 'The Shiny Grey Angular Portfolio';
	showTourofheroes = true;
	showTwitter = true;
	showPackageSearch = true;
	showWebsites = true;

	toggleWebsites() { this.showWebsites = !this.showWebsites; }
	toggleHeroes() { this.showTourofheroes = !this.showTourofheroes; }
	toggleTwitter() { this.showTwitter = !this.showTwitter; }
	togglePackageSearch() { this.showPackageSearch = !this.showPackageSearch; }
}







