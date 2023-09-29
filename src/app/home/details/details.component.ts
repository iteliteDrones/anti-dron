import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

import { imagesPath } from 'src/app/path';
import { data } from './paticularDetails';

import { generalDetails, particularDetails } from '../detailsTypes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements AfterViewInit{

  constructor(private changeDetRef: ChangeDetectorRef){}

  @Input() details: {value: generalDetails, id: number} | null = null;
  protected imagesPath: string = imagesPath + "/home/content/content_";

  protected properties: particularDetails;

  public ngAfterViewInit(): void {
    this.buttonListener();
  }

  @ViewChild("content")
  content: ElementRef;

  @ViewChild("learnMore")
  button: ElementRef;

  private buttonListener(): void
  {
    let flag: boolean = false;
    const that = this;

    let time;

    fromEvent(this.button.nativeElement, "mousemove")
    .subscribe(showProperties);

    fromEvent(this.button.nativeElement, "mouseleave")
    .subscribe(leaveFromButton);

    function showProperties(e: MouseEvent): void
    {

      function show(): void
      {
        if(!flag) return;

        that.button.nativeElement.style.opacity = 0;

        setTimeout(() => {
          that.button.nativeElement.style.display = "none";
          flag = true;
        }, 1200);

        flag = false;

        that.properties = data[that.details.id];
        that.changeDetRef.detectChanges();
      }

      flag = true;

      if(time) clearTimeout(time);
      time = setTimeout(show, 1300);
    };

    function leaveFromButton()
    {
      flag = false;
    }
  }

  hideDetails(): void
  {

    this.properties = null;
    this.button.nativeElement.style.display = "block";

    this.button.nativeElement.style.opacity = 1;
    this.changeDetRef.detectChanges();
  }

}
