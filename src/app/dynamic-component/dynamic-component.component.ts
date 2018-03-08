import {Component, HostBinding, Injectable, Injector} from '@angular/core';
import {slideInDownAnimation} from '../animations';

@Component({
    selector: 'wg-dynamic-component',
    template: `
        <div class="container">
            <h1>Angular version 4</h1>
            <button (click)="changeComponent()">Change component</button>
            <ng-container *ngComponentOutlet="alert; injector: myInjector"></ng-container>
        </div>
    `,
    animations: [slideInDownAnimation]
})
export class DynamicComponentComponent {
    @HostBinding('@leftInBottomOut') animation;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    myInjector: Injector;
    alert = AlertDangerComponent;

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
    template: `
        <div class="alert-success" [@leftInBottomOut]>
            <p>{{data.getData('success')}}</p>
        </div>
    `,
    animations: [slideInDownAnimation]
})
export class AlertSuccessComponent {
    constructor(readonly data: Data) {
    }
}

@Component({
    template: `
        <p class="alert-danger" [@leftInBottomOut]>{{data.getData('alert')}}</p>
    `,
    animations: [slideInDownAnimation]
})
export class AlertDangerComponent {
    constructor(readonly data: Data) {
    }
}
