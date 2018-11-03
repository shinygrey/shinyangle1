import { Component } from '@angular/core';
import { RequestService } from './request.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	constructor(private requests: RequestService){}
	
	ngOnInit(){
		this.requests.getBackEndVariable().subscribe((data: string) => console.log(data + " get happened"));
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
