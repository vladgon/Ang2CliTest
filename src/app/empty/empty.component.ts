import {Component, HostBinding} from '@angular/core';
import {slideInDownAnimation} from '../animations';

@Component({
    selector: 'wg-empty',
    templateUrl: './empty.component.html',
    animations: [slideInDownAnimation]
})
export class EmptyComponent {
    @HostBinding('@leftInBottomOut') animation;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';
}
