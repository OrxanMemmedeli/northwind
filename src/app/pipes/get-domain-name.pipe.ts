import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDomainName',
})
export class GetDomainNamePipe implements PipeTransform {
  transform(value: string, symbol: string): string {
    
    let domen = value.substring(value.indexOf(symbol)+1);

    return domen;
  }
}
