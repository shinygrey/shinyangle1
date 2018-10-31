import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpErrorHandler }     from './http-error-handler.service';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectSearchComponent } from './project-search/project-search.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService }       from './messages/message.service';
import { TwitterComponent } from './twitter/twitter.component';
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
	ProjectsComponent,
	ProjectSearchComponent,
	MessagesComponent,
	TwitterComponent,
	WebsitesComponent,
	TourofheroesComponent
],
  imports: [
	BrowserModule,
	FormsModule
  ],
	providers: [
		HttpErrorHandler,
		MessageService,
		WebsitesService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
