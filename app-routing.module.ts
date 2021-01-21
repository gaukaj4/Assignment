import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { usersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', component: usersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
