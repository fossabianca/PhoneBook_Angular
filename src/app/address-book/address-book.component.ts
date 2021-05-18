import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { AddressBookDataService } from '../services/address-book-data.service';
import { AuthService } from '../auth.service';
import { Router} from "@angular/router";

@Component({
  selector: 'address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css'],
  providers: [AuthService],
})
export class AddressBookComponent implements OnInit {
  contact:Contact = new Contact();
  constructor(private dataService: AddressBookDataService,private AuthService: AuthService, private router: Router,) { }

  ngOnInit() {
    if(!(this.AuthService.getAuth))
    {
      this.router.navigate(['/login']);
    }
  }


  saveContact(event) {
    if(event.mode === "new") {
      this.dataService.addContact(event.contact);
    } else if (event.mode === "edit") {
      this.dataService.updateContactById(event.contact.id, event.contact);
    }
  }

  editContact(id) {
    this.contact = new Contact(this.dataService.getContactById(id));
  }

  deleteContact(id) {
    this.dataService.deleteContactById(id);
  }

  get contacts() {
    return this.dataService.getContacts();
  }

}
