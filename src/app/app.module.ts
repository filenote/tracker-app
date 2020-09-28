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
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { AddSuggestionComponent } from './component/add-suggestion/add-suggestion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SimpleTrackerComponent } from './component/simple-tracker/simple-tracker.component';





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FeatureSuggestionComponent,
    StageBarComponent,
    StageComponent,
    AddSuggestionComponent,
    SimpleTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  entryComponents: [
    AddSuggestionComponent
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
