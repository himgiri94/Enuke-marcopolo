import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MarcoPoloTestComponent } from './marco-polo-test/marco-polo-test.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/marcopolo',
    pathMatch: 'full'
  },
  { path: 'marcopolo', component: MarcoPoloTestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MarcoPoloTestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
