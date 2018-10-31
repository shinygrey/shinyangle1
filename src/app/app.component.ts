import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'The Shiny Grey Angular Portfolio';
	showTourofheroes = true;
	showConfig = true;
	showDownloader = true;
	showUploader = true;
	showSearch = true;	
	showWebsites = true;

	toggleWebsites() { this.showWebsites = !this.showWebsites; }
	toggleHeroes() { this.showTourofheroes = !this.showTourofheroes; }
	toggleConfig() { this.showConfig = !this.showConfig; }
	toggleDownloader() { this.showDownloader = !this.showDownloader; }
	toggleUploader() { this.showUploader = !this.showUploader; }
	toggleSearch() { this.showSearch = !this.showSearch; }
}
