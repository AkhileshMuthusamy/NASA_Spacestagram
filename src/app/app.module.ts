import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilterModalComponent} from './dialog-boxes/filter-modal/filter-modal.component';
import {ImageModalComponent} from './dialog-boxes/image-modal/image-modal.component';
import {ShareModalComponent} from './dialog-boxes/share-modal/share-modal.component';
import {HeaderComponent} from './header/header.component';
import {PictureCardComponent} from './picture-card/picture-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PictureCardComponent,
    ImageModalComponent,
    ShareModalComponent,
    FilterModalComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
