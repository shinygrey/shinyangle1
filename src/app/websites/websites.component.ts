import { Component, OnInit } from '@angular/core';
import { Website } from '../website';
import { WebsitesService } from './websites.service';

@Component({
	selector: 'app-websites',
	templateUrl: './websites.component.html',
	styleUrls: ['./websites.component.css']
})

export class WebsitesComponent implements OnInit {

	websites: Website[];
	selectedWebsite: Website;

	constructor(private weblinksdetails: WebsitesService){}

	ngOnInit(){
		this.getWebsites();
	}

	onSelect(website: Website): void {
		this.selectedWebsite = website;
	}
	
	getWebsites(): void {
		this.weblinksdetails.getWebsites().subscribe(dataThroughObservable => this.websites = dataThroughObservable);
	}
}