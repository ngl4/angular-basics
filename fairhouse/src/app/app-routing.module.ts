import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { //creating the routes 
  path: '', 
  component: HomeComponent //home page 
  },
  { path: 'details/:id', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
