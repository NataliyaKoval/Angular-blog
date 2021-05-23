import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostsListComponent} from './posts-list/posts-list.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {TodoComponent} from './todo/todo.component';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'todo', component: TodoComponent}
  {path: 'registration', component: RegistrationComponent},
  {path: 'layout', component: LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
