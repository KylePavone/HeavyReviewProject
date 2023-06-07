import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { ItemCartComponent } from './components/entry/item-cart/item-cart.component';
import { AlbumProfileComponent } from './components/entry/item-profile/album-profile.component';
import { NewsItemComponent } from './components/entry/news-item/news-item.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    ItemCartComponent,
    AlbumProfileComponent,
    NewsItemComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
