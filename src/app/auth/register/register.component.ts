import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { lanjuage } from 'src/app/helpers/languaje';
import {getMEssage, displayAlert} from 'src/app/helpers/getError';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent  {

  public formSubmitted = false;
  public registerForm = this.fb.group({
    name: ['Missael', [Validators.required, Validators.minLength(4)]],
    email: ['test1@gmail.com', [Validators.email, Validators.required]],
    password: ['123456', [Validators.required]],
    password2: ['123456', [Validators.required]],
    terms: [false, [Validators.required]],
  }, {
    validators: this.samePasswords('password','password2'),
  });
  showPassword = false;
  showPassword2 = false;
  idiom = new lanjuage();
  constructor(private router: Router,private fb: FormBuilder, private us: UserService) { }

  registerUser() {
    this.formSubmitted = true;
    if(this.registerForm.invalid || !this.registerForm.get('terms')?.value) return console.log('Formulario con errores');

    this.us.createUser(this.registerForm.value).subscribe((resp) => {
      displayAlert(this.idiom.successTitle, this.idiom.successMessage);
      this.router.navigateByUrl('/');
    }, (err) => {
      console.warn(err.error.msg)
      const msg = getMEssage(err.error.msg);
      displayAlert('Error',msg, err.status)
      
    });
    
  }

  validatePasswords() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;
    
    return pass1 !== pass2 && this.formSubmitted ? false : true;

  }

  samePasswords(pass1: string, pass2: string) {
    return (formGroup: FormGroup) => {
      const pass1Ctrl = formGroup.get(pass1);
      const pass2Ctrl = formGroup.get(pass2);

      if (pass1Ctrl?.value === pass2Ctrl?.value) {
        pass2Ctrl?.setErrors(null);
      } else {
        pass2Ctrl?.setErrors({notSame: true});        
      }
    } 
  }

  
}
