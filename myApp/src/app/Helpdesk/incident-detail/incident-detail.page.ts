import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { freeApiService } from 'src/app/services/freeapi.service';
import { Helpdesk } from '../../services/helpdesk.model';


@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.page.html',
  styleUrls: ['./incident-detail.page.scss'],
})
export class IncidentDetailPage implements OnInit {
  loadedIncident: Helpdesk;
 
  constructor(private activatedRoute: ActivatedRoute,private _freeApiService: freeApiService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('incidentNr')) {
        return;
      }
      const incidentNr = paramMap.get('incidentNr');
      this._freeApiService.getincident(incidentNr)
    .subscribe (
      data=>
      {
        this.loadedIncident = data;
      }
    );
    });
  }

}
