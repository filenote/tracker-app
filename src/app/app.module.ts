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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { AddSuggestionComponent } from './component/add-suggestion/add-suggestion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SimpleTrackerComponent } from './component/simple-tracker/simple-tracker.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { TimeagoModule } from 'ngx-timeago';
import { TruncateModule } from '@yellowspot/ng-truncate';
import {MatExpansionModule} from '@angular/material/expansion';
import { FeaturePageComponent } from './component/feature-page/feature-page.component';
import { FeatureCommentComponent } from './component/feature-page/feature-comment/feature-comment.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FeatureSuggestionComponent,
    StageBarComponent,
    StageComponent,
    AddSuggestionComponent,
    SimpleTrackerComponent,
    LoginComponent,
    RegisterComponent,
    FeaturePageComponent,
    FeatureCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    TimeagoModule.forRoot(),
    TruncateModule,
    MatExpansionModule
  ],
  entryComponents: [
    AddSuggestionComponent
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
