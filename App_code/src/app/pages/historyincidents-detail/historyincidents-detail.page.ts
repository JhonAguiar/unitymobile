import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelpdeskService } from '../../services/Helpdesk.service';
import { Helpdesk, HelpdeskResolution } from '../../services/helpdesk.model';

@Component({
  selector: 'app-historyincidents-detail',
  templateUrl: './historyincidents-detail.page.html',
  styleUrls: ['./historyincidents-detail.page.scss'],
})
export class HistoryincidentsDetailPage implements OnInit {
  loadedIncident: Helpdesk;
  hresolution: HelpdeskResolution;
  error: string;
  resolution: string = "";
  description: string = "";
  subjectnr: string = "";
  prioritynr: number = 0;
  incident: Helpdesk;
  isenabled:boolean=false;
  user_id : string =  sessionStorage.getItem("user_id");

  constructor(private _HelpdeskService: HelpdeskService,private activatedRoute: ActivatedRoute) {
    this.incident = new Helpdesk;    
    this.hresolution = new HelpdeskResolution;
    this.incident.DESCRIPTION = "";
    this.incident.SUBJECTNR = 1;
    this.incident.PRIORITYNR = 1;
   }

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
