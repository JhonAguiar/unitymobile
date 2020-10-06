import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { Helpdesk } from '../services/helpdesk.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  incidents: Helpdesk[];
   
  
  constructor(private _freeApiService: freeApiService,private route: Router) { }

  ngOnInit() {
    this._freeApiService.getincidents()
    .subscribe (
      data=>
      {
        this.incidents = data;
      }
    );
  }
  
  startnewincident() {
    this.route.navigate(['/newincident']);
  }

  doReorder(ev: any) {
    // Before complete is called with the items they will remain in the
    // order before the drag
    console.log('Before complete', this.incidents);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    this.incidents = ev.detail.complete(this.incidents);

    // After complete is called the items will be in the new order
    console.log('After complete', this.incidents);
  }

}
