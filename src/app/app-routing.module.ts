import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Use RouterModule, Routes for activating routing in angular
import { RouterModule, Routes } from '@angular/router';

// Include components for in which router service to be used
import { UserListComponent } from './user/user-list/user-list.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { MatchedComponent} from './matched/matched.component';

// Routes array define component along with the path name for url
const routes: Routes = [
  { path: 'matched', component: MatchedComponent },
  { path: 'list-users', component: UserListComponent },
  { path: 'edit-user/:id', component: EditUserComponent }
];

// Import RouterModule and inject routes array in it and dont forget to export the RouterModule
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
