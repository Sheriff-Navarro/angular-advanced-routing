import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ContactServiceService} from '../contact-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactListComponent implements OnInit {

  contacts: Array<any>;

  constructor(
    private router: Router,
    private contactService: ContactServiceService
  ) {}

  ngOnInit() {
    this.contacts = this.contactService.getList();
  }

  viewDetails(id, param){
    this.router.navigate(['contact', id], { queryParams: { foo: param }});
  }
}
