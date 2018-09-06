import {Component, HostBinding} from '@angular/core';
import {slideInDownAnimation} from '../animations';
import {Data} from './data';
import {Dynamic} from './dynamic.component';

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
    @HostBinding('style.position') position = 'absolute';
    @HostBinding('style.overflow') overflow = 'hidden';

    constructor(public  data: Data) {
    }
}
