import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { RpsComponent } from './rps/rps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SplashComponent } from './splash/splash.component';
@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    RpsComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
