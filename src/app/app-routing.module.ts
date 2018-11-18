import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IntroductionComponent },
  { path: 'tag', pathMatch: 'full', component: TagsComponent },
  { path: 'tag/:name', pathMatch: 'full', component: TagsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
