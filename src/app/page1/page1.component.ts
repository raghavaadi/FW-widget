import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.FreshworksWidget('prefill', 'ticketForm', {
      name: 'Rachel',
      email: 'rachel@acme.incs',
      custom_fields: {
        "cf_chilling": 'page1value',
        "cf_contract_single": "sdk"
      }
    }, {
      formId: 1070000015985
    });
    window.FreshworksWidget('hide', 'ticketForm', ['custom_fields.cf_chilling'], {
      formId: 1070000015985 // Ticket Form ID
    });
  }

}
