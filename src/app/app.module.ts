import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth.guard';
import {TrainingService} from './training/training.service';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {UIService} from './shared/ui.service';
import {AuthModule} from './auth/auth.module';
import {TrainingModule} from './training/training.module';
import {SharedModule} from './shared/shared.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {StoreModule} from '@ngrx/store';
import {reducers} from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule,
    TrainingModule,
    SharedModule,
    AngularFirestoreModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [AuthService, AuthGuard, TrainingService, UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
