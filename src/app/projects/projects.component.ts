import { Component, OnInit } from '@angular/core';
import { Project } from '../projects/project';
import { PortfolioService } from '../portfolio.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
	projects: Project[];

	constructor(private portfolio1:PortfolioService){}

	ngOnInit(){
		this.getProjects();
	}
	
	getProjects():void{
		this.portfolio1.getProjects().subscribe(projects => this.projects = projects);
	}
}
