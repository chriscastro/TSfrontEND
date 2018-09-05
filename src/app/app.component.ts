import { Component, OnInit } from '@angular/core';
import { Usuario } from './models/usuario';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'Ticket-Show';
  public user: Usuario;
  public identity;
  public token;

  constructor( private _userService: UserService) {
    this.user = new Usuario('' , '' , '' , '');
  }

  ngOnInit() {
    //var texto =  this._userService.signup();
    //console.log(texto);
  }

  public onSubmit() {
    console.log(this.user);
    this._userService.signup(this.user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        var errorMessage = <any>error;

        if (errorMessage != null) {
          console.log(error);
        }
      }
    );
  }
}
