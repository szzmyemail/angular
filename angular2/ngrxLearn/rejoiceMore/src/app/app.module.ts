import { NgModule } from '@angular/core';//, isDevMode
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as counterReducers from './state/counter.reducer';
import { AtlasAuthDataAccessModule } from "./state/counter.data.access.module"
//import { counterReducer, counterReducerFeatureKey } from './state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({aaa: counterReducers.counterReducer}),
    AtlasAuthDataAccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
