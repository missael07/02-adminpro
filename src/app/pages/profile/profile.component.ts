import { Component, OnInit } from '@angular/core';
import { lanjuage } from 'src/app/helpers/languaje';
import { User } from '../../models/user/user.model';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { displayAlert } from 'src/app/helpers/getError';
import { getMEssage } from '../../helpers/getError';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {
  idiom = new lanjuage()
  user: User;

  public profileForm: any;
  public imgFile: any;
  public imgTemp: any;
  public formSubmitted = false;

  constructor(private us: UserService, private fb: FormBuilder, private fu: FileUploadService) {
    this.user = us.user;
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.email, Validators.required]],
      rol: ['USER_ROLE', [Validators.required]],
      
    });
  }

  updateProfile() {
    this.formSubmitted = true;
    if(this.profileForm.invalid) return console.log('Formulario con errores');
    this.us.updateUser(this.profileForm.value).subscribe( (resp) => {
      const { name, email, role } = this.profileForm.value;
      this.user.name = name;
      this.user.email = email;
      this.user.role = role;

      displayAlert(this.idiom.saveTitle, this.idiom.saveMessage, 'success');
      
    }, (err) => {
      console.log(err);
      const msg = getMEssage(err.error.msg);
      displayAlert('Error', msg, err.status,'error');
    })
  }

  changeImage(event: any) {
    if (this.user.google) {
      displayAlert(this.idiom.warningTitle, this.idiom.warningMessage, 'info');      
      return;
    }

      this.imgFile = event.target.files[0];
      if (!this.imgFile) return this.imgTemp = null;
  
      const reader = new FileReader();
      reader.readAsDataURL(this.imgFile);
  
      reader.onloadend = () => {
        this.imgTemp = reader.result;
      }
  
      return;
  }

  uploadImg() {
    if (this.user.google) {
      displayAlert(this.idiom.warningTitle, this.idiom.warningMessage, 'info');      
      
    }
    else {
      this.fu.updatePhoto(this.imgFile, 'users', this.user.uid).then(img => {
        this.user.img = img;      
        displayAlert(this.idiom.saveTitle, this.idiom.saveMessage, 'success');        
      }, (err) => {
        const msg = getMEssage(err.error.msg);
        displayAlert('Error', msg, err.status,'error');
      });
    }
  }

  change() {
    if (this.user.google) {
      displayAlert(this.idiom.warningTitle, this.idiom.warningMessage, 'info');
      return;
    }
    const element = document.getElementById('imgInput');
    element?.click();
  }
}
