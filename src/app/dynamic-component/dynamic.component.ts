import {Component, HostBinding, Injector} from '@angular/core';
import {slideInDownAnimation} from '../animations';
import {Data} from './data';
import {AlertDangerComponent} from './alert.danger.component';
import {AlertSuccessComponent} from './alert.success.component';

export interface Dynamic {
}


@Component({
    selector: 'wg-dynamic-component',
    template: `
        <div class="container">
            <h1>Angular version 4</h1>
            <button (click)="changeComponent()">Change component</button>
            <ng-container *ngComponentOutlet="alert; injector: myInjector;"></ng-container>
        </div>
    `,
    entryComponents: [AlertSuccessComponent, AlertDangerComponent],
    animations: [slideInDownAnimation]
})
export class DynamicComponent {
    @HostBinding('@leftInBottomOut') animation;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    myInjector: Injector;
    alert: Dynamic = AlertDangerComponent;

    data: Data;

    constructor(private injector: Injector) {
        this.data = new Data('Init');
        this.myInjector = Injector.create({providers: [{provide: Data, useValue: this.data}], parent: injector});
    }

    changeComponent() {
        this.alert = this.alert === AlertSuccessComponent ? AlertDangerComponent : AlertSuccessComponent;
        this.data.initData = this.alert === AlertSuccessComponent ? 'Success+' : 'Alert+';
    }

}

