import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { HeaderComponent } from './header/header.component';
import { SaveContactComponent } from './save-contact/save-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { AddressBookDataService } from './services/address-book-data.service';
import { LoginComponent } from './login/login.component';

const LISTA_ROUTES = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "addressBook", component: AddressBookComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    HeaderComponent,
    SaveContactComponent,
    ContactListComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(LISTA_ROUTES),
  ],
  providers: [AddressBookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
