import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public title: string;
  public imgUnity: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.imgUnity = "assets/icon/favicon.png";
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
