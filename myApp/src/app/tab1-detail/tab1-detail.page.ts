import { Component, OnInit } from '@angular/core';
import { Helpdesk } from '../services/helpdesk.model';

@Component({
  selector: 'app-tab1-detail',
  templateUrl: './tab1-detail.page.html',
  styleUrls: ['./tab1-detail.page.scss'],
})
export class Tab1DetailPage implements OnInit {
loadedIncident: Helpdesk;
  constructor() { }

  ngOnInit() {
  }

}
