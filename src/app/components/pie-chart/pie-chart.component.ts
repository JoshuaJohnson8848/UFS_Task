import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  @Input() pieChart: any
  @Input() loading: any;
  constructor(){
    
  }
}
