import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent {
  @Input() informacionContacto?: string;
 

}
