import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'app-tourofheroes',
	templateUrl: './tourofheroes.component.html',
	styleUrls: ['./tourofheroes.component.css']
})
export class TourofheroesComponent implements OnInit {
	heroes: Hero[] = [];
	numberOfTop: number = 4;

	constructor(private heroService1: HeroService){}

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService1.getHeroes('HeroService: fetched heroes in tour component').subscribe(heroes => this.heroes = heroes.slice(0, this.numberOfTop));
	}
}