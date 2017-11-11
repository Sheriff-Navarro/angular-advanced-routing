import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-conact',
  templateUrl: './conact.component.html',
  styleUrls: ['./conact.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConactComponent implements OnInit {
  contactId: number;
  optionalParameter: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.contactId = +params['id'];
    });

    this.route.queryParams
      .subscribe((queryParams) => {
        this.optionalParameter = queryParams['foo'];
    });
  }
}
