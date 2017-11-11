import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import {ContactServiceService} from './contact-service.service';
import {ConactComponent} from './conact/conact.component';

const routes: Routes = [
  { path: '', component:ContactListComponent },
  { path: 'contact/:id', component: ConactComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ConactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [ContactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
