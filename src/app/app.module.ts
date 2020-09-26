import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HomeComponent } from './component/home/home.component';
import { FeatureSuggestionComponent } from './component/feature-suggestion/feature-suggestion.component';
import { StageBarComponent } from './component/stage-bar/stage-bar.component';
import { StageComponent } from './component/stage-bar/stage/stage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FeatureSuggestionComponent,
    StageBarComponent,
    StageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
