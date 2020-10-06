import { Component, OnInit, NgZone } from '@angular/core';
import { Helpdesk, HelpdeskResolution } from '../services/helpdesk.model';
import { ActivatedRoute, Router } from '@angular/router';
import { freeApiService } from '../services/freeapi.service';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-incident-technician-detail',
  templateUrl: './incident-technician-detail.page.html',
  styleUrls: ['./incident-technician-detail.page.scss'],
})
export class IncidentTechnicianDetailPage implements OnInit {
  resolution: string = "";
  loadedIncident: Helpdesk;
  incident: Helpdesk;
  hresolution: HelpdeskResolution;
  error: string;
  Tab2Page1: Tab2Page;
  
  constructor(private activatedRoute: ActivatedRoute,private _freeApiService: freeApiService,private route: Router,private zone: NgZone) { 
    this.incident = new Helpdesk;
    this.hresolution = new HelpdeskResolution;
    this.incident.DESCRIPTION = "";
    this.Tab2Page1 = new Tab2Page(_freeApiService,zone);

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

  solveincident() {
    this.hresolution.RESOLUTION = this.resolution;
    this.hresolution.INCIDENTNR = this.loadedIncident.NR;
    this.hresolution.USERNR = -1;
    this.hresolution.USERNAME = 'gjansen';
    this.hresolution.ACTIVE = true;
    this._freeApiService.submitincidentResolution(this.hresolution).subscribe(
      HelpdeskResolution => {
        console.log(this.hresolution);
      },
      err => {
        console.log(err);
      }
    );
    this.zone.run(() => {
      console.log('force update the screen');
    });
    this.Tab2Page1.refresh();
    this.route.navigate(['/tabs']);
  }
 
}