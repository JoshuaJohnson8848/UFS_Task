import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PieChartComponent } from "../pie-chart/pie-chart.component";
import { ApiServicesService } from '../../services/api-services.service';
import Chart  from 'chart.js/auto';
import { BarChartComponent } from "../bar-chart/bar-chart.component";

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [PieChartComponent, BarChartComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent implements OnInit, AfterViewInit{
  loading: boolean = false;
  barChart: any;
  pieChart: any;
  
  // months: Array<any> = ['Jan', 'Feb','Mar']
  months: Array<any> = []
  // pieData: Array<any> = [300, 50, 100]
  pieData: Array<any> = []
  // courses: Array<any> = ['BCA', 'MCA','BBA']
  courses: Array<any> = []
  // barData: Array<any> = [65, 59, 80]
  barData: Array<any> = []

  constructor(private _api: ApiServicesService, private _cd: ChangeDetectorRef){

  }

  ngAfterViewInit(): void {
    this.getData();
    this.loadCharts()
  }

  ngOnInit(): void {
    console.log(this.loading);
    this.loading = false
    this.getData();

    this.loadCharts()
  
  }

  getData(){
    this._api.getData().subscribe((res)=>{

      if(res?.length){

        this.courses = res[0]?.map((elem: any) => {
          return elem?.Course_Name
        });

        this.pieData = res[0]?.map((elem: any) => {
          return elem?.Enrollment_Count
          
        });

        this.months = res[1]?.map((elem: any) => {
          return elem?.Month
        });

        this.barData = res[1]?.map((elem: any) => {
          return elem?.Student_Count
        });
        this.loading = true;

        this._cd.markForCheck(); 
      }

      
    })
  }

  loadCharts(){
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data : {
        labels: this.months,
        datasets: [{
          label: 'Month Wise Student Enrollment',
          data: this.barData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
          ],
          borderWidth: 1
        }]
        }
    })

    this.pieChart = new Chart('pieChart', {
      type: 'doughnut',
      data : {
        labels: this.courses,
        datasets: [{
          label: 'Popular Courses',
          data: this.pieData,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      }
    })

    this._cd.markForCheck(); 

  }
}
