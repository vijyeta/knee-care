import { Pipe, PipeTransform } from '@angular/core';
import { retry, takeUntil } from 'rxjs/operators';

/**
* FetchDataPipe helps to call Promises in one line without worrying about error handling.

* If error, then the response will be null.
* If response, then the error will be null.

* NOTE: The response will be undefined after canceling the API calls
 */

@Pipe({
  name: 'fetchData'
})
export class FetchDataPipe implements PipeTransform {
  async transform(
    service: any,
    unsubscribe?: any,
    repeat: number = 0
  ): Promise<any[]> {
    let response: any;

    try {
      if (unsubscribe) {
        response = await service
          .pipe(takeUntil(unsubscribe))
          .pipe(retry(repeat))
          .toPromise();
      } else {
        response = await service.pipe(retry(repeat)).toPromise();
      }

      return [response, null];
    } catch (error) {
      return [null, error];
    }
  }

}
