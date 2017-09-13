import {Component, Injectable, Injector, ReflectiveInjector} from '@angular/core';

@Component({
    selector: 'wg-dynamic-component',
    template: `
        <h1>Angular version 4</h1>
        <ng-container *ngComponentOutlet="alert; injector: myInjector"></ng-container>

        <button (click)="changeComponent()">Change component</button>
    `,
})
export class DynamicComponentComponent {
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
        <p>{{data.getData('success')}}</p>
    `,
})
export class AlertSuccessComponent {
    constructor(public data: Data) {
    }
}

@Component({
    selector: 'wg-alert-danger',
    template: `
        <p>{{data.getData('alert')}}</p>
    `,
})
export class AlertDangerComponent {
    constructor(public data: Data) {
    }
}
