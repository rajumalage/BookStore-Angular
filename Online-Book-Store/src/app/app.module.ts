import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {routing} from './app.routing';
import {HomeComponent} from './components/home/home.component';
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { PaymentService } from './services/payment.service';
import { ShippingService } from './services/shipping.service';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatTabsModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent
   
    // StoreFrontComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    NgbModule,
    routing,
    FormsModule,
    MatTabsModule,
    HttpClientModule,
    HttpModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
    
  ],
  providers: [LoginService,
              UserService,PaymentService,ShippingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
