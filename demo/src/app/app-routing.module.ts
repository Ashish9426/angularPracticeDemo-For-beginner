import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  // {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'services', component:ServicesComponent},
  {path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
