import { Component, OnInit } from '@angular/core';


@Component({
    selector:    'MainPage' ,
    templateUrl: '../../views/main/main.html',
    providers:  []
})

export class MainComponent implements OnInit{
    public titulo: string;
    public identity = true;
    public token;

    constructor() {
        this.titulo = 'MainPage';
    }

    ngOnInit(){
        console.log('MainPage cargando');
    }

}