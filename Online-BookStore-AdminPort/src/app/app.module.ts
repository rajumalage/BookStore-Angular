import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { NavBarComponent } from './componenets/nav-bar/nav-bar.component';
import { LoginComponent } from './componenets/login/login.component';
import { ViewBookComponent } from './componenets/view-book/view-book.component';

import { LoginService } from './services/login.service';
import { AddBookService } from './services/add-book.service';
import { UploadImageService } from './services/upload-image.service';
import { BookListComponent,DialogOverviewExampleDialog } from './componenets/book-list/book-list.component';
import { GetBookListService } from './services/get-book-list.service';
import { GetBookService } from './services/get-book.service';
import { EditBookService } from './services/edit-book.service';
import { EditBookComponent } from './componenets/edit-book/edit-book.component';
import { RemoveBookService } from './services/remove-book.service';

import { FormsModule } from '@angular/forms';
import { AddNewBookComponent } from './componenets/add-new-book/add-new-book.component'
import { MatButtonModule, MatCardModule, MatMenuModule,MatToolbarModule, MatIconModule, MatCheckboxModule,
MatAutocompleteModule, MatInputModule,MatFormFieldModule,MatGridListModule,MatSelectModule,MatSlideToggleModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    ViewBookComponent,
    EditBookComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatToolbarModule, MatIconModule, MatAutocompleteModule, MatInputModule,MatFormFieldModule,MatGridListModule,MatSelectModule,MatSlideToggleModule,MatDatepickerModule,
    HttpModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule


  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  providers: [LoginService,AddBookService,UploadImageService,GetBookListService,GetBookService,EditBookService,RemoveBookService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
