import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { lanjuage } from 'src/app/helpers/languaje';


declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('googleBtn') googleBtn: ElementRef | undefined;
  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    remember: [Boolean(localStorage.getItem('remember')) || false]
  });
  showPassword = false;
  idiom = new lanjuage();
  showFrgForm = false
  formSubmitted = false;

  constructor(private router: Router, private fb: FormBuilder, private us: UserService, private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.googleInit();
  }

  googleInit() {
    google.accounts.id.initialize({
      client_id: '472483945643-6ncluvn5lllj6vc9lnq83s1q3tc9pcpb.apps.googleusercontent.com',
      callback: (reponse: any) => this.handleCredentialResponse(reponse)
    });
    google.accounts.id.renderButton(
      this.googleBtn?.nativeElement,
      { size: "large" }  // customization attributes
        
    );
  }

  handleCredentialResponse(response: any) {
    this.us.googleSignIn(response.credential).subscribe((resp) => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/');
      })
    }, (err) => {
      console.warn(err)
      this.displayAlert('Error', err.error.error.token.msg)
      
    });
  }

  login() {

    this.formSubmitted = true;
    if(this.loginForm.invalid) return console.log('Formulario con errores');

    this.us.login(this.loginForm?.value).subscribe((resp) => {
      if (this.loginForm.get('remember')?.value) {
        const email = this.loginForm.get('email')?.value;
        const remember = this.loginForm.get('remember')?.value;
        if (email) {
          localStorage.setItem('email', email);
          localStorage.setItem('remember', remember ? 'true' : 'false');
        }

      }
      else {
        localStorage.removeItem('email');
        localStorage.removeItem('remember');
        
      }
      this.router.navigateByUrl('/');

      // this.displayAlert('Exito','Usuario creado con exito')

    }, (err) => {
      console.warn(err)
      this.displayAlert('Error', err.error.msg || err.error.error.email.msg || err.error.error.password.msg)
      
    });
    // 
  }

  displayAlert(title: string, msg: string) {
    
    if (title === 'Error') return Swal.fire(title, msg, 'error')
    
    return Swal.fire(title, msg, 'success');
  }


}
