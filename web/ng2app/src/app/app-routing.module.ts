import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { AlbumProfileComponent } from './components/entry/item-profile/album-profile.component';
import { AlbumResolver } from './resolvers/album.resolver';


const routes: Routes = [
  { path: '', component: EntryComponent },
  { path: 'album/:id', component: AlbumProfileComponent, resolve: {
    data: AlbumResolver
  } }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
