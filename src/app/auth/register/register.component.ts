import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { lanjuage } from 'src/app/helpers/languaje';
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
      this.displayAlert('Exito', 'Usuario creado con exito');
      this.router.navigateByUrl('/');
    }, (err) => {
      console.warn(err.error.msg)
      this.displayAlert('error',err.error.msg)
      
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

  displayAlert(title:string, msg: string) {
    
    if (title === 'error') return Swal.fire(title, msg, 'error')
    
    return Swal.fire(title, msg, 'success');
  }
}
