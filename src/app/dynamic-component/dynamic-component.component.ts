import {Component, HostBinding, Injectable, Injector, ReflectiveInjector} from '@angular/core';
import {slideInDownAnimation} from '../animations';

@Component({
    selector: 'wg-dynamic-component',
    template: `
        <div>
            <h1>Angular version 4</h1>
            <ng-container *ngComponentOutlet="alert; injector: myInjector"></ng-container>

            <button (click)="changeComponent()">Change component</button>
        </div>
    `,
    animations: [slideInDownAnimation]
})
export class DynamicComponentComponent {
    @HostBinding('@leftInBottomOut') animation;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    myInjector: Injector;
    alert: any;

    data: Data;

    constructor(injector: Injector) {
        this.data = new Data('Init');
        this.myInjector = ReflectiveInjector.resolveAndCreate([{provide: Data, useValue: this.data}], injector);
    }

    changeComponent() {
        this.alert = this.alert === AlertSuccessComponent ? AlertDangerComponent : AlertSuccessComponent;
        this.data.initData = this.alert === AlertSuccessComponent ? 'Success+' : 'Alert+';
    }

}

@Injectable()
class Data {
    constructor(public initData: string) {
    }

    getData(name: string) {
        if (name === 'alert') {
            return `Alert Data 1 ${name} - ${this.initData}`;
        } else {
            return `Success Data 1 ${name} - ${this.initData}`;
        }
    }
}

@Component({
    selector: 'wg-alert-success',
    template: `
        <p [@leftInBottomOut]>{{data.getData('success')}}</p>
    `,
    animations: [slideInDownAnimation]
})
export class AlertSuccessComponent {
    constructor(public data: Data) {}
}

@Component({
    selector: 'wg-alert-danger',
    template: `
        <p [@leftInBottomOut]>{{data.getData('alert')}}</p>
    `,
    animations: [slideInDownAnimation]
})
export class AlertDangerComponent {
    constructor(public data: Data) {}
}
