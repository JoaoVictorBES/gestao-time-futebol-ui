import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterOutlet
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: []
})
export class AppModule { }
