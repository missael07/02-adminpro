import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, retry, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubs: Subscription;
  constructor() {
    // this.retrunObservable().pipe(
    //   retry(1)
    // ).subscribe(valor => console.log(valor), error => console.warn(error),
    //   () => console.info('completado'));

    this.intervalSubs = this.returnInterval().subscribe(console.log);


  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
  returnInterval() {
    const intervals = interval(100)
      .pipe(
        map(valor => valor + 1),
        filter(valor => (valor % 2 === 0) ?  true : false),
        // take(10),
      );

    return intervals;
}

  retrunObservable(): Observable<number> {
    let i = -1;
    const obs = new Observable<number>(observer => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i == 4) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000)
    });
    return obs;
  }
  
}
