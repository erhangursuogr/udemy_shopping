import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProductPipe'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: any[], filterText: string): any[] {
    if (!filterText) {
      return value;
    } else
      try {
        return value.filter((p: any) => p.name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1);
      } catch (error) {
        console.log(error);
        return value;
      }
  }
}




