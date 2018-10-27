import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectSearchComponent } from './project-search/project-search.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
declarations: [
	AppComponent,
	DashboardComponent,
	ProjectsComponent,
	ProjectSearchComponent,
	ProjectDetailComponent,
	MessagesComponent
],
  imports: [
	BrowserModule,
	FormsModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
