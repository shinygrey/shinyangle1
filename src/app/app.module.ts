import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpErrorHandler }     from './http-error-handler.service';
import { RequestService }       from './request.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService }       from './messages/message.service';
import { PackageSearchComponent } from './package-search/package-search.component';
import { TwitterComponent } from './twitter/twitter.component';
import { TwitterService } from './twitter/twitter.service';
import { WebsitesComponent }      from './websites/websites.component';
import { WebsitesService } from './websites/websites.service';
import { TourofheroesComponent } from './tourofheroes/tourofheroes.component';
import { HeroesComponent }      from './tourofheroes/heroes.component';
import { HeroDetailComponent } from './tourofheroes/hero-detail.component';

@NgModule({
declarations: [
	AppComponent,
	HeroesComponent,
	HeroDetailComponent,
	MessagesComponent,
	TwitterComponent,
	WebsitesComponent,
	PackageSearchComponent,
	TourofheroesComponent
],
	imports: [
	BrowserModule,
	FormsModule,
	HttpClientModule //import after Browser
	],
	providers: [
		HttpErrorHandler,
		RequestService,
		MessageService,
		TwitterService,
		WebsitesService
	],
	bootstrap: [AppComponent]
})
export class AppModule{}