import { Pipe, PipeTransform } from '@angular/core';
import { Satellite } from './satellite.model';

@Pipe({
  name: 'country',
  pure: true
})

export class CountryPipe implements PipeTransform {

  transform(input: Satellite[], desiredFilter){
    var output: Satellite[] = [];
    if (input !== null) {
          if (desiredFilter === "ALL") {
            output = input;
          } else {
            for (let i = 0; i < input.length; i++) {
              if (input[i].CountryOperatorOwner === desiredFilter) {
                output.push(input[i]);
              }
            }
          }
    }
    return output;
  }

}
