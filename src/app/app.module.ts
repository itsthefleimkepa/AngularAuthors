import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorAddComponent } from './author-add/author-add.component';
import { AuthorDeleteComponent } from './author-delete/author-delete.component';
import { AuthorUpdateComponent } from './author-update/author-update.component';
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {path: 'authorList', component: AuthorListComponent},
  {path: 'author-list', component: AuthorListComponent},
  {path: 'author-add', component: AuthorAddComponent},
  {path: 'author-delete', component: AuthorDeleteComponent},
  {path: 'author-update', component: AuthorUpdateComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    AuthorAddComponent,
    AuthorDeleteComponent,
    AuthorUpdateComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
