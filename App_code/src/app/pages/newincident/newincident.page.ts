import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpdeskService } from '../../services/Helpdesk.service';
import { Helpdesk } from '../../services/helpdesk.model';

@Component({
  selector: 'app-newincident',
  templateUrl: './newincident.page.html',
  styleUrls: ['./newincident.page.scss'],
})
export class NewincidentPage implements OnInit {
  description: string = "";
  subjectnr: string = "";
  prioritynr: number = 0;
  incident: Helpdesk;
  isenabled:boolean=false;
  user_id : string =  sessionStorage.getItem("user_id");

  constructor(private _HelpdeskService: HelpdeskService,private route: Router) {
    this.incident = new Helpdesk;
    this.incident.DESCRIPTION = "";
    this.incident.SUBJECTNR = 1;
    this.incident.PRIORITYNR = 1;
   }

  ngOnInit() {
  }

  submitnewincident() {
    this.incident.DESCRIPTION = this.description;
    this.incident.SUBJECTNR = +this.subjectnr;
    this.incident.PRIORITYNR = +this.prioritynr;
    this.incident.SUBJECTNR = 1;
    this.incident.USERNAME = this.user_id;

    this._HelpdeskService.submitincident(this.incident).subscribe(
      Helpdesk => {
        console.log(this.incident);
      },
      err => {
        console.log(err);
      }
   );
  //  this.route.navigate(['/tabs'])
   window.location.href = "/tabs";
  }

}
