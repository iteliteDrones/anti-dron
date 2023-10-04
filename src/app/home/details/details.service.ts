import { Injectable } from '@angular/core';
import { data } from './paticularDetails';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private time;

  showProperties(button, flag): void
    {
      function show(): void
      {
        if(!this.flag.value) return;

        button.nativeElement.style.opacity = 0;

        setTimeout(() => {
          button.nativeElement.style.display = "none";
          this.flag = true;
        }, 1200);

        this.flag.value = false;

        this.properties = data[this.details.id];
        this.changeDetRef.detectChanges();
      }

      flag.value = true;

      if(this.time) clearTimeout(this.time);
      this.time = setTimeout(show.bind(this), 1300);
    };

    leaveFromButton(flag)
    {
      flag.value = false;
      if(this.time) clearTimeout(this.time);
    }
}
