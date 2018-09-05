import { Component } from '@angular/core';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Ticket-Show';
  public user: Usuario;
  public identity;
  public token;

  constructor(){
    this.user = new Usuario('','','','');
  }
  public onSubmit(){
    console.log(this.user);
  }
}
