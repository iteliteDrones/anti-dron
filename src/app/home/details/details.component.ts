import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

import { imagesPath } from 'src/app/path';
import { generalDetails, particularDetails } from '../detailsTypes';

import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../../details.scss']
})
export class DetailsComponent implements AfterViewInit{

  constructor(private changeDetRef: ChangeDetectorRef, private detailsService: DetailsService){}

  @Input() details: {value: generalDetails, id: number} | null = null;
  @Output() refreshDetailsComponentSize: boolean;
  
  protected imagesPath: string = imagesPath + "/home/content/content_";
  private flag: boolean = false;

  protected properties: particularDetails;

  @ViewChild("content")
  content: ElementRef;

  @ViewChild("learnMore")
  button: ElementRef;

  public ngAfterViewInit(): void {
    fromEvent(this.button.nativeElement, "mousemove")
    .subscribe(this.detailsService.showProperties.bind(this, this.button));

    fromEvent(this.button.nativeElement, "mouseleave")
    .subscribe(this.detailsService.leaveFromButton.bind(this, this));
  }

  hideDetails(): void
  {
    this.properties = null;
    this.button.nativeElement.style.display = "block";

    this.button.nativeElement.style.opacity = 1;
    this.changeDetRef.detectChanges();
  }

}
