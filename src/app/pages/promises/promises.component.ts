import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers().then(users => {
      console.log(users);
    });
    // const promesa = new Promise((resolve, reject) => { 
    //   if (false) {
    //     setTimeout(() => {
    //       resolve('Llego la data');
    //     }, 3500);
    //   }
    //   else {
    //     reject('Error');
    //   }

    // });

    // promesa.then((mensaje) => {
    //   console.log(mensaje, 'Termino');
    // }).catch((error) => { 
    //   console.log(error);
    // });
  }

  getUsers() { 
    const promesa = new Promise(resolve => {
      fetch('https://reqres.in/api/users?page=2')
        .then(resp => resp.json())
        .then(body => resolve(body.data));
    });
    return promesa;
  }

}
