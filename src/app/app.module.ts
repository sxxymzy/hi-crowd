import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {MatButtonModule, MatMenuModule, MatToolbar} from '@angular/material';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';

const matImports = [
  MatToolbar,
  MatButtonModule,
  MatMenuModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...matImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
