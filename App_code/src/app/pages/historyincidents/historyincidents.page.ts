import { Component, OnInit } from '@angular/core';
import { HelpdeskService } from '../../services/helpdesk.service';
import { Helpdesk } from '../../services/helpdesk.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historyincidents',
  templateUrl: './historyincidents.page.html',
  styleUrls: ['./historyincidents.page.scss'],
})
export class HistoryincidentsPage implements OnInit {
  incidents: Helpdesk[];
  user_id : string =  sessionStorage.getItem("user_id");
  constructor(private _HelpdeskService: HelpdeskService,private router: Router) { }

  ngOnInit() {
    this._HelpdeskService.getincidentshistory(this.user_id)
    .subscribe (
      data=>
      {
        this.incidents = data;
      }
    );
  }

}
