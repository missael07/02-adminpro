import { Component, OnInit,  } from '@angular/core';
import { ChartData, ChartEvent, Color } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit   {
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#6857E6','#009FEE','#F02059'],
      },
    ]
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    datasets: [ {
      data: [300, 500, 100],
      backgroundColor: ['#6857E6','#009FEE','#F02059'],
    } ]
  };
  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
      datasets: [
        { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A',backgroundColor: '#009FEE' },
        { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B',backgroundColor: '#F02059' }
    ]
  };
  public radarChartData: ChartData<'radar'> = {
    labels: [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ],
    datasets: [
      { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B' }
    ]
  };
  
  ngOnInit(): void {
    this.createDoughnutChart();
    this.createRadarChart();
    this.createBarChart();
    this.createPieChart();
  }

  createDoughnutChart() { 
    this.doughnutChartData = {
    labels: [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#6857E6','#009FEE','#F02059'],
      },
    ]
  };
  }

  createPieChart() {
      this.pieChartData = {
    labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    datasets: [ {
      data: [300, 500, 100],
      backgroundColor: ['#6857E6','#009FEE','#F02059'],
    } ]
  };
  }

  createBarChart() { 
    this.barChartData = {
      labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
      datasets: [
        { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A',backgroundColor: '#009FEE' },
        { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B',backgroundColor: '#F02059' }
      ]
    };
  }

  createRadarChart() {
    this.radarChartData= {
    labels: [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ],
    datasets: [
      { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series A'},
      { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B' }
    ]
  };
  }
}
