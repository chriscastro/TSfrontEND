import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable()
export class UserService{
    public url: string;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    signup(){
        return 'hola mundo';
    }
}