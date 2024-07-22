import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  @Input() barChart: any;
  @Input() loading: any;
   constructor(){}
}
