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
  constructor() {}

  ngOnInit() {}
}
