import { Produtos } from './produtos.model';
export interface ProdutosServiceModel {
  items: Produtos[];
  hasNext: boolean;
}
