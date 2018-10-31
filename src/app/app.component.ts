import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'The Shiny Grey Angular Portfolio';
	showHeroes = true;
	showConfig = true;
	showDownloader = true;
	showUploader = true;
	showSearch = true;	
	showWebsites = true;

	toggleHeroes() { this.showHeroes = !this.showHeroes; }
	toggleConfig() { this.showConfig = !this.showConfig; }
	toggleDownloader() { this.showDownloader = !this.showDownloader; }
	toggleUploader() { this.showUploader = !this.showUploader; }
	toggleSearch() { this.showSearch = !this.showSearch; }
}
