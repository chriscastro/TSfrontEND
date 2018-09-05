import { Component, OnInit } from '@angular/core';
import { Usuario } from './models/usuario';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'TicketShow';
  public user: Usuario;
  public identity;
  public token;

  constructor( private _userService:UserService)
  {
    this.user = new Usuario('' , '' , '' , '');
  }

  ngOnInit() {

  }

  public onSubmit() {
    console.log(this.user);
  }
}
