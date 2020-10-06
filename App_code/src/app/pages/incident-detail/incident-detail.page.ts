import { Component, OnInit } from '@angular/core';
import { HelpdeskService } from '../../services/Helpdesk.service';
import { Helpdesk } from '../../services/helpdesk.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.page.html',
  styleUrls: ['./incident-detail.page.scss'],
})
export class IncidentDetailPage implements OnInit {
  loadedIncident: Helpdesk;
  error: string;

  constructor(private _HelpdeskService: HelpdeskService,private activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
 
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('incidentNr')) {
        return;
      }
     
      const incidentNr = paramMap.get('incidentNr');  console.log(incidentNr);
       
      this._HelpdeskService.getincident(incidentNr)
    .subscribe (
      data=>
      { 
        this.error = JSON.stringify(data);
        this.loadedIncident = data;
       // alert(this.error);
      },
      err => {
        this.error = 'An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}';
      }
    );
    });

  }

}
