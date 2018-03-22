import {Component, HostBinding, Injector} from '@angular/core';
import {slideInDownAnimation} from '../animations';

interface Dynamic {
}

@Component({
    template: `
        <div class="alert-success" style="white-space: nowrap" [@leftInBottomOut]>
            {{data.getData('success')}}
        </div>
    `,
    animations: [slideInDownAnimation]
})
export class AlertSuccessComponent implements Dynamic {
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';
    @HostBinding('style.overflow') overflow = 'hidden';

    constructor(public data: Data) {
    }
}

@Component({
    template: `
        <div class="alert-danger" style="white-space: nowrap" [@leftInBottomOut]>
            {{data.getData('alert')}}
        </div>
    `,
    animations: [slideInDownAnimation]
})

export class AlertDangerComponent implements Dynamic {
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.overflow') overflow = 'hidden';

    constructor(public  data: Data) {
    }
}


@Component({
    selector: 'wg-dynamic-component',
    template: `
        <div class="container">
            <h1>Angular version 4</h1>
            <button (click)="changeComponent()">Change component</button>
            <ng-container *ngComponentOutlet="alert; injector: myInjector"></ng-container>
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

export class Data {
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
