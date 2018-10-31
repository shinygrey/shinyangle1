import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 
import { Project } from '../projects/project';
import { PortfolioService } from '../portfolio.service';

@Component({
	selector: 'app-project-detail',
	templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
	project: Project;
	constructor(
		private route: ActivatedRoute,
		private portfolio1: PortfolioService,
		private location: Location){}

	ngOnInit(): void{
	this.getProject();
	}
	
	getProject(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.portfolio1.getProject(id).subscribe(project => this.project = project);
	}

	goBack(): void {
		this.location.back();
	}
}