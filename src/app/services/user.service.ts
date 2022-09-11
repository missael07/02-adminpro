import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators'
import { Router } from '@angular/router';


import { RegisterForm, LoginForm } from '../interfaces/auth.interface';
import { map, Observable, of } from 'rxjs';

declare const google: any;
const URL = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private ngZone: NgZone) { }


  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${URL}login/renew`, {
      headers: { 'x-auth-token': token }
    }).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      }), map(resp => true),
      catchError( err => of(false))
    );
  }

  createUser(formData: RegisterForm) {
    console.log('Creando usuario...');
    
    return this.http.post(`${URL}users`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  login(formData: LoginForm) {
    console.log('Loading...');
    
    return this.http.post(`${URL}login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  googleSignIn(token: string) {
    return this.http.post(`${URL}login/google`, { token }).pipe(
      tap((resp: any) => {
        console.log(resp);
        localStorage.setItem('token', resp.tokenUser);
      })
    );
  }


  logOut() {
    localStorage.removeItem('token');
    google.accounts.id.revoke('lmpadillar@gmail.com', () => {
      this.ngZone.run(() => {        
        this.router.navigateByUrl('/login');
      });
    })
  }
}
