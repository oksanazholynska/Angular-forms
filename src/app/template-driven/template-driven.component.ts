import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  public user: User = new User();
  constructor() { }
  ngOnInit(): void {
    this.user = {
      id: 1,
      email: '',
      password: '',
    };
  }
  public cleanButtonClicked(): void{
    this.user = new User();
  }
  public onSubmit(): void {
    console.log(this.user);
  }
}
