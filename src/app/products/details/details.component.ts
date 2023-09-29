import { Component } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() detailsChild;
}
