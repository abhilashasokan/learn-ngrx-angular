import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getMyBanana } from './app.state';


@Component({
    selector: 'app-banana',
    templateUrl: './banana.component.html',
    styleUrls: ['./banana.component.css']
})
export class BananaComponent implements OnInit {

    title = 'NgRx Banana App';

    constructor() {

    }

    ngOnInit() {

    }

    newBanana() {

    }

    peelBanana() {

    }

    eatBanana() {

    }

    timeHop() {

    }
}
