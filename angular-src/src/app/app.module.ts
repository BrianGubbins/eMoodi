import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LocalForecastComponent } from './components/local-forecast/local-forecast.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { WeatherService } from './services/weather.service';
import { RecipeService } from './services/recipe.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import{ AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'input', component: InputsComponent, canActivate:[AuthGuard]},
  {path: 'suggestion', component: SuggestionComponent, canActivate:[AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    LocalForecastComponent,
    InputsComponent,
    SuggestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, WeatherService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
