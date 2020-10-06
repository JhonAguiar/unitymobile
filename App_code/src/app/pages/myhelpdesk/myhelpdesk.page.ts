import { Component, OnInit } from '@angular/core';
import { HelpdeskService } from '../../services/helpdesk.service';
import { Helpdesk } from '../../services/helpdesk.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myhelpdesk',
  templateUrl: './myhelpdesk.page.html',
  styleUrls: ['./myhelpdesk.page.scss'],
})
export class MyhelpdeskPage implements OnInit {
  incidents: Helpdesk[];

  constructor(private _HelpdeskService: HelpdeskService,private router: Router) { }

  ngOnInit() {
    this._HelpdeskService.getincidents()
    .subscribe (
      data=>
      {
        this.incidents = data;
      }
    );
  }

  goToDetail(){
    this.router.navigate(['/incident-detail']);
  }

  startnewincident() {
    this.router.navigate(['/inbox']);
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
