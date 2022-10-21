import { DashService } from './shared/dash.service';
import { Component, OnInit } from '@angular/core';
import {
  PoChartOptions,
  PoChartSerie,
  PoChartType,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit {
 constructor(private dashService:DashService) {}
  dash:any;
  type:PoChartType = PoChartType.Line;

  ngOnInit() {
    this.dashService.getModulos().subscribe({
      next: resposta => {
        this.dash = resposta;
        console.log(resposta)
      }
    })
  }
}
