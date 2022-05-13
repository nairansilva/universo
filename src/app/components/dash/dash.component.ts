import { Component, OnInit } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5
    }
  };

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    { label: 'Pagar', data: [2500, 3000, 2750, 3500, 4000, 2050], color: 'color-07' },
    { label: 'Receber', data: [3000, 4000, 3200, 5500, 4000, 4000] , color: 'color-10'},
    { label: 'Saldo', data: [500, 1000, 550, 2000, 0, 1950], color: 'color-03' },
  ];

  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;


  constructor() { }

  ngOnInit(): void {
  }

  dataAtual(): string {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return dia + '/' + mes + '/' + ano;;
  }
}
