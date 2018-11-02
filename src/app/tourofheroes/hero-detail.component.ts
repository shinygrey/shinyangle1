import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'app-hero-detail',
	templateUrl: './hero-detail.component.html',
	styles: ['label{display:inline-block;width: 4em;margin: .5em 0;color: #607D8B;font-weight: bold;} input{height: 2em;font-size: 1em;padding-left:.4em;}']
})
export class HeroDetailComponent implements OnInit {

	@Input() hero: Hero;

	constructor(){}
	ngOnInit(){}
}