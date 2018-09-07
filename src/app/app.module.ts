import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { UpdateTipoEventoComponent } from './components/TipoEvento/updateTipoEvento.component';
import { MainComponent} from './components/default/main.component';
import { BlankComponent} from './components/default/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateTipoEventoComponent,
    MainComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
