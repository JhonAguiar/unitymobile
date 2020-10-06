import { Component, OnInit } from '@angular/core';
import { Helpdesk, HelpdeskResolution } from '../services/helpdesk.model';
import { freeApiService } from '../services/freeapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incidentdetailsolved',
  templateUrl: './incidentdetailsolved.page.html',
  styleUrls: ['./incidentdetailsolved.page.scss'],
})
export class IncidentdetailsolvedPage implements OnInit {
  resolution: string = "";
  loadedIncident: Helpdesk;
  incident: Helpdesk;
  loadedSolution: HelpdeskResolution;
  error: string;
  
  constructor(private activatedRoute: ActivatedRoute,private _freeApiService: freeApiService) { 
    this.incident = new Helpdesk;
    this.incident.DESCRIPTION = "";

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('incidentNr')) {
        return;
      }
     
      const incidentNr = paramMap.get('incidentNr');
       
    this._freeApiService.getincident(incidentNr)
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

    this._freeApiService.getsolution(incidentNr)
    .subscribe (
      data=>
      { 
        this.error = JSON.stringify(data);
        this.loadedSolution = data;
       // alert(this.error);
      },
      err => {
        this.error = 'An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}';
      }
    );
    });

  
  }

  ngOnInit() {
  }

}
