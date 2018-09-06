import {Component, HostBinding} from '@angular/core';
import {slideInDownAnimation} from '../animations';
import {Data} from './data';
import {Dynamic} from './dynamic.component';

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

    constructor(public  data: Data) {
    }
}
