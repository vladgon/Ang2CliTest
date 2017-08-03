import {Component, ComponentFactoryResolver} from '@angular/core';


@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})

export class AppComponent {
    title = 'app works';

    constructor(private _componentFactoryResolver: ComponentFactoryResolver) {
    }
}
