import { Component, OnInit, ViewChild } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: "home", shortLabel:"Home", icon:"po-icon-home" },
    { label: 'Análise de Dados', link: "dash", shortLabel:"Analise", icon:"po-icon-chart-columns" },
//    { label: 'Sair', action: () => this.configService.callAppClose(), shortLabel: "Sair", icon:  },
  ];

  ngOnInit(): void {

  }

  private onClick() {
    alert('Clicked in menu item');
  }

}
