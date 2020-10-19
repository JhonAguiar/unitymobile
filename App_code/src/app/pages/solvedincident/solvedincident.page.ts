import { Component, OnInit } from '@angular/core';
import { HelpdeskService } from '../../services/helpdesk.service';
import { Helpdesk } from '../../services/helpdesk.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solvedincident',
  templateUrl: './solvedincident.page.html',
  styleUrls: ['./solvedincident.page.scss'],
})
export class SolvedincidentPage implements OnInit {
  incidents: Helpdesk[];
  user_id : string =  sessionStorage.getItem("user_id");
  constructor(private _HelpdeskService: HelpdeskService,private router: Router) { }

  ngOnInit() {
    this._HelpdeskService.getincidentssolved(this.user_id)
    .subscribe (
      data=>
      {
        this.incidents = data;
      }
    );
  }

}
