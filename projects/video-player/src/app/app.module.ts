import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoDetailsComponent,
    VideoItemComponent,
    VideoListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
