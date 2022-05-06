import { ProductsComponent } from './components/products/products.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'home',
    component: ProductsComponent
  },
];
export class RoutingModule {}
