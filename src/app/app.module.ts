import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HttpErrorHandler }     from './http-error-handler.service';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectSearchComponent } from './project-search/project-search.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService }       from './messages/message.service';
import { AppRoutingModule } from './app-routing.module';
import { TwitterComponent } from './twitter/twitter.component';
import { WebsitesComponent }      from './websites/websites.component';
import { WebsitesService } from './websites/websites.service';

@NgModule({
declarations: [
	AppComponent,
	DashboardComponent,
	HeroesComponent,
	ProjectsComponent,
	ProjectSearchComponent,
	ProjectDetailComponent,
	MessagesComponent,
	TwitterComponent,
	WebsitesComponent
],
  imports: [
	BrowserModule,
	FormsModule,
	AppRoutingModule
  ],
	providers: [
		HttpErrorHandler,
		MessageService,
		WebsitesService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
