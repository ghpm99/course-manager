import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseModule } from './courses/course.module';
import { Error404Component } from './error404/error-404.component';


@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,    
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },      
      {
        path: '**',
        component: Error404Component,
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
