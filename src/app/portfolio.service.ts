import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './projects/project';
import { PROJECTDATA } from './projects-manually-collected';

@Injectable({
	providedIn: 'root'
})
export class PortfolioService{

	constructor(){}
	
	getProjects(): Observable<Project[]>{
		return of(PROJECTDATA);
	}
	getProject(id: number): Observable<Project>{
	/*this.messageService.add(`PortfolioService: fetched project id=${id}`);   MESSAGE SERVICE*/
		return of(PROJECTDATA.find(project => project.id === id));
	}
}