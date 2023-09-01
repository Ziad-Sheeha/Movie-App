import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { LoginComponent } from './Core/Components/Registeration/login/login.component';
import { SignUpComponent } from './Core/Components/Registeration/sign-up/sign-up.component';
import { UserProfileComponent } from './Core/Components/user-profile/user-profile.component';
import { HomeComponent } from './Pages/home/home.component';
import { ErrorComponent } from './error/error.component';
import { MovieDetailsComponent } from './Pages/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    UserProfileComponent,
    HomeComponent,
    ErrorComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
