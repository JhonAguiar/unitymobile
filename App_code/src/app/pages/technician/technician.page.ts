import { Component, OnInit } from '@angular/core';
import { HelpdeskService } from '../../services/helpdesk.service';
import { Helpdesk } from '../../services/helpdesk.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.page.html',
  styleUrls: ['./technician.page.scss'],
})
export class TechnicianPage implements OnInit {
  incidents: Helpdesk[];
  user_id : string =  sessionStorage.getItem("user_id");
  constructor(private _HelpdeskService: HelpdeskService,private router: Router) { }

  ngOnInit() {
    this._HelpdeskService.getassignedincidents(this.user_id)
    .subscribe (
      data=>
      {
        this.incidents = data;
      }
    );
  }

}
