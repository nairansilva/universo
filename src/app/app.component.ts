import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: 'home', shortLabel: 'Home', icon: 'po-icon-home' }
  ];

  ngOnInit(): void {}
}
