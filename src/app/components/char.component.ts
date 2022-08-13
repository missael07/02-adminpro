import { Component, Input } from '@angular/core';

import { ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styles: [
  ]
})
export class CharComponent {
  @Input('title') title: string = 'Sin titulo';
  @Input('labels') public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input('data') public doughnutChartData: ChartData = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#6857E6','#009FEE','#F02059'],
      },
    ]
  };
  @Input('type') public doughnutChartType: ChartType = 'doughnut';

}
