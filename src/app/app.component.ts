import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { ProAppConfig, ProAppConfigService } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private proAppConfig: ProAppConfigService){}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: 'home', shortLabel: 'Home', icon: 'po-icon-home' },
    { label: 'Dashboard', link: 'dash', shortLabel: 'Dash', icon: 'po-icon-chart-area' },
    { label: 'Sair', action: () => this.proAppConfig.callAppClose(), shortLabel: 'Sair', icon: 'po-icon-exit' },

  ];

  ngOnInit(): void {}
}
