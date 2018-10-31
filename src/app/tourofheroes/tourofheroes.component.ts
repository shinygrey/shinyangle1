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

	constructor(private heroService: HeroService) { }

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0, this.numberOfTop));
	}
}