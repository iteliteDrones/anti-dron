import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MouseService } from './mouse/mouse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../../node_modules/bootstrap/scss/bootstrap.scss']
})

export class AppComponent implements OnInit{

  constructor(private mouseService: MouseService){}

  title: string = 'anti-drone';

  @ViewChild("nav_list")
  navList: ElementRef | undefined;

  @ViewChild("bar_menu")
  barMenu: ElementRef | undefined;

  public ngOnInit(): void {
    this.mouseService.setMouseStyle();
  }

}