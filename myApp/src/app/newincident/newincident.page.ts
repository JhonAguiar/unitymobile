import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { freeApiService } from '../services/freeapi.service';
import { Helpdesk } from '../services/helpdesk.model';


@Component({
  selector: 'app-newincident',
  templateUrl: './newincident.page.html',
  styleUrls: ['./newincident.page.scss']
})
export class NewincidentPage implements OnInit {
  description: string = "";
  incident: Helpdesk;
  isenabled:boolean=false;

  constructor(private _freeApiService: freeApiService,private route: Router) {  
    this.incident = new Helpdesk;
    this.incident.DESCRIPTION = "";
   }


  ngOnInit() {
 
  }
 

  submitnewincident() {
    this.incident.DESCRIPTION = this.description;
    this.incident.PRIORITYNR = 1;
    this.incident.SUBJECTNR = 1;
    this.incident.USERNAME = 'gjansen';

    this._freeApiService.submitincident(this.incident).subscribe(
      Helpdesk => {
        console.log(this.incident);
      },
      err => {
        console.log(err);
      }
   );

    this.route.navigate(['/tabs']);
  }

  cancelnewincident() {
    this.route.navigate(['/tabs']);
  }

  

}
