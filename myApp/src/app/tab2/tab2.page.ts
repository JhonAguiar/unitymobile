import { Component, OnInit, NgZone } from '@angular/core';
import { Helpdesk } from '../services/helpdesk.model';
import { freeApiService } from '../services/freeapi.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  incidents: Helpdesk[];
  
  constructor(private _freeApiService: freeApiService,private zone: NgZone) { }

  refresh() {
    
    this.zone.run(() => {
      console.log('force update the screen');
    });
  }

  ionViewWillEnter(){
    this.RefreshList();     
  }
  
  ngOnInit() {
    this.RefreshList();
  }

  public RefreshList() {
    this._freeApiService.getassignedincidents()
    .subscribe (
      data=>
      {
        this.incidents = data;
      }
    );
   
  }

}
