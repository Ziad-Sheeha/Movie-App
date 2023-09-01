import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ErrorComponent } from './error/error.component';
import { UserProfileComponent } from './Core/Components/user-profile/user-profile.component';
import { MovieDetailsComponent } from './Pages/movie-details/movie-details.component';
import { UsersDashboardComponent } from './Admin/Pages/users-dashboard/users-dashboard.component';
import { MoviesDashboardComponent } from './Admin/Pages/movies-dashboard/movies-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'movieDetails', component: MovieDetailsComponent },
  { path: 'moviesDashboard', component: MoviesDashboardComponent },
  { path: 'usersDashboard', component: UsersDashboardComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
