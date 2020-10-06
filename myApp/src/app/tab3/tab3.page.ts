import { Component, OnInit } from '@angular/core';
import { Helpdesk } from '../services/helpdesk.model';
import { freeApiService } from '../services/freeapi.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  incidents: Helpdesk[];
  constructor(private _freeApiService: freeApiService) { }

  ngOnInit() {
    this._freeApiService.getincidents()
    .subscribe (
      data=>
      {
        this.incidents = data;
      }
    );
  }

}
