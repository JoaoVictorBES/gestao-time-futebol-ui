import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch, HttpInterceptor } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterOutlet,
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: []
})
export class AppModule { }
