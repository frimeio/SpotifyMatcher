import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { MatchedComponent } from './matched/matched.component';
import {HttpClientModule} from '@angular/common/http';
import { ArtistComponent } from './artist/artist.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    UserListComponent,
    MatchedComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
