import {animate, AnimationMetadata, state, style, transition, trigger} from '@angular/animations';

// Component transition animations
export const navBarAnimation: AnimationMetadata =
    trigger('slideTopButton', [
        state('collapsed',
            style({
                height: '0',
                transform: 'translateX(-50%) scale(0)'
            })
        ),
        state('expanded',
            style({
                height: '*',
                transform: 'translateX(0) scale(1) '
            })
        ),
        state('togglerHidden',
            style({
                transform: 'translateX(0) scale(1)'
            })
        ),
        transition('collapsed => togglerHidden',
            animate('2.3s ease-out')),
        transition('collapsed => expanded',
            animate('0.3s ease-in')),
        transition('expanded => collapsed',
            animate('0.3s ease-out'))
    ]);
