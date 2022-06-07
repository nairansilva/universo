import { DashService } from './shared/dash.service';
import { Component, OnInit } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  loading = true;
  title = '';
  options: PoChartOptions;

  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;

  categories: Array<string>;// = ['2010', '2011', '2012', '2013', '2014', '2015'];
  participationByCountryInWorldExports: Array<PoChartSerie>;
  // participationByCountryInWorldExports: Array<PoChartSerie> = [
  //   { label: 'Brazil', data: [35, 32, 25, 29, 33, 33], color: 'color-10' },
  //   { label: 'Vietnam', data: [15, 17, 23, 19, 22, 18] },
  //   { label: 'Colombia', data: [8, 7, 6, 9, 10, 11] },
  //   { label: 'India', data: [5, 6, 5, 4, 5, 5] },
  //   { label: 'Indonesia', data: [7, 6, 10, 10, 4, 6] }
  // ];

  constructor(private dashService:DashService) {
    this.dashService.getModulos().subscribe(
      res => {
        this.title = res.title;
        this.options = {axis:res.options};
        this.categories = res.categories;
        this.participationByCountryInWorldExports = res.series;
        console.log(this.options);
        this.loading = false;
      },
      erro => console.log(erro)
    )
   }

  ngOnInit() {

  }

}
