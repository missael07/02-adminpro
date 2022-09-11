import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private us: UserService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    console.log('Guard Can Activate');
    
    return this.us.validateToken().pipe(
      tap(isAuthenticated => {
        if(!isAuthenticated) this.router.navigateByUrl('/login')
      })
    );
  }
  
}
