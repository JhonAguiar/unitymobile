import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { freeApiService } from '../services/freeapi.service';
import { Helpdesk } from '../services/helpdesk.model';

@Component({
  selector: 'app-incident-detail2',
  templateUrl: './incident-detail2.page.html',
  styleUrls: ['./incident-detail2.page.scss'],
})
export class IncidentDetail2Page implements OnInit {
  loadedIncident: Helpdesk;
  error: string;
  
  constructor(private activatedRoute: ActivatedRoute,private _freeApiService: freeApiService) { 
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
    });

  }

  ngOnInit() {
    
  }

}
