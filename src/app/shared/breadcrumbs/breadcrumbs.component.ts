import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string = 'Sin título';
  public pageComing: string = 'Perfil';
  public path: string = '';
  public titleSubs$: Subscription;
  constructor(private router: Router) {
    this.titleSubs$ = this.getDataRoute().subscribe(({ title, pageComing,path }) => {
        this.title = title;
        this.pageComing = pageComing;
        this.path = path;
        document.title = `adminPro - ${title}`;
      });
  }
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getDataRoute() { 
      return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      map((event) => event as ActivationEnd),
      filter(event => event.snapshot.firstChild === null),
      map((event) => event.snapshot.data),
    )
  }

}
