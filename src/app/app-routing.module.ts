import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {SharedPostLayoutComponent} from './shared-post-layout/shared-post-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent
  },
  {
    path: ':date',
    component: SharedPostLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
