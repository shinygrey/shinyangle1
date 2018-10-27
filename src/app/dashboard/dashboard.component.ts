import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PortfolioService } from '../portfolio.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	projects: Project[] = [];

	constructor(private portfolio1:PortfolioService){}

	ngOnInit(){
		this.getProjects();
	}

	getHeroes(): void {
	this.portfolio1.getProjects()
		.subscribe(projects => this.projects = projects.slice(1, 5));
	}
}