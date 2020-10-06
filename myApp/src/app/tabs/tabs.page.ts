import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  
  public userRole: string = '120';  
  
  isShown:boolean= true;
  constructor() { }

  ngOnInit() {    
    console.log(this.userRole);
    if(this.userRole=='120')
    {
      
    }
  }

}
