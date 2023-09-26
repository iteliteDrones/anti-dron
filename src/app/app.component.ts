import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MouseService } from './mouse/mouse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit, OnInit {

  constructor(private mouseService: MouseService){}

  title: string = 'anti-drone';

  @ViewChild("nav_list")
  navList: ElementRef | undefined;

  @ViewChild("bar_menu")
  barMenu: ElementRef | undefined;

  ngOnInit(): void {
    this.mouseService.setMouseStyle();
  }

  ngAfterViewInit(): void {

    function showList(e: MouseEvent)
    {
      
    };

    this.barMenu?.nativeElement
    .addEventListener("click", showList);
  }
}