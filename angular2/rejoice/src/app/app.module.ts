import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NgContentLearnComponent } from './ng-content-learn/ng-content-learn.component';
import { TrackByComponent } from './track-by/track-by.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HighlightDirective,
    NgContentLearnComponent,
    TrackByComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
