import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MouseService } from './mouse/mouse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {

  constructor(private mouseService: MouseService, private router: Router){}

  title: string = 'anti-drone';

  @ViewChild("nav_list")
  navList: ElementRef | undefined;

  @ViewChild("bar_menu")
  barMenu: ElementRef | undefined;

  ngOnInit(): void {

    this.mouseService.setMouseStyle();
    const that = this;
  }

  ngAfterViewInit(): void {
    document.querySelectorAll("nav .nav-list ul li")
    .forEach((e) => {
      e.addEventListener("click", () => {
        const data = e.getAttribute("data");
        if(!data) return;

        this.router.navigate([`${e.getAttribute("data")}`]);
      })
    })
  }


}