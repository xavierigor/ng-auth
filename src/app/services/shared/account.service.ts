import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  login(user: any) {
    // simulando request pois ainda não existe backend implementado
    return new Promise(resolve => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    })
  }

  signUp(account: any) {
    // simulando request pois ainda não existe backend implementado
    return new Promise(resolve => {
      resolve(true);
    })
  }
}
