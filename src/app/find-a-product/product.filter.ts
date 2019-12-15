import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Product } from '../entities/product';

@Pipe({name: 'filterProduct'})
@Injectable()
export class FilterProduct implements PipeTransform {

  transform(items: Product[], search: any): any {
  // your custom code here
      console.log(search);
      console.log(items);

      if (search === undefined) {
        return items;
      }

      search = search.toLowerCase();
      return items.filter(product => product.name && product.name.toLowerCase().includes(search) ||
        Number(product.price) <= search)

    // return items;

  }
}
