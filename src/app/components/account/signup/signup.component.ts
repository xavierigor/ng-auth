import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/shared/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  account = {
    name: '',
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  async onSubmit() {
    
  }

}
