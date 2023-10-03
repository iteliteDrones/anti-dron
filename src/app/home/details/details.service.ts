import { Injectable } from '@angular/core';
import { data } from './paticularDetails';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  public changeSizeSubject: Subject<boolean> = new Subject<boolean>();

  showProperties(this, button): void
    {
      let time;

      function show(): void
      {
        if(!this.flag) return;

        this.button.nativeElement.style.opacity = 0;
        this.detailsService.changeSizeSubject.next(true);

        setTimeout(() => {
          button.nativeElement.style.display = "none";
          this.flag = true;
        }, 1200);

        this.flag = false;

        this.properties = data[this.details.id];
        this.changeDetRef.detectChanges();
      }

      this.flag = true;

      if(time) clearTimeout(time);
      time = setTimeout(show.bind(this), 1300);
    };

    leaveFromButton(this)
    {
      this.flag = false;
    }
}
