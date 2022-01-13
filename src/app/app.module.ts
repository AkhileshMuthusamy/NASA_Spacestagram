import {DatePipe} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
// import {ServiceWorkerModule} from '@angular/service-worker';
// import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilterModalComponent} from './dialog-boxes/filter-modal/filter-modal.component';
import {ImageModalComponent} from './dialog-boxes/image-modal/image-modal.component';
import {NotificationModalComponent} from './dialog-boxes/notification-modal/notification-modal.component';
import {ShareModalComponent} from './dialog-boxes/share-modal/share-modal.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {PictureCardLoadingComponent} from './picture-card-loading/picture-card-loading.component';
import {PictureCardComponent} from './picture-card/picture-card.component';
import {HttpInterceptorService} from './services/http-interceptor.service';
import {SharedPostLayoutComponent} from './shared-post-layout/shared-post-layout.component';
import {SafeUrlPipe} from './shared/pipes/safe-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PictureCardComponent,
    ImageModalComponent,
    ShareModalComponent,
    FilterModalComponent,
    HeaderComponent,
    MainLayoutComponent,
    SharedPostLayoutComponent,
    SafeUrlPipe,
    PictureCardLoadingComponent,
    FooterComponent,
    NotificationModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   // Register the ServiceWorker as soon as the app is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
