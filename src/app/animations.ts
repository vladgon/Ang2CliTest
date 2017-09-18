import {animate, AnimationMetadata, state, style, transition, trigger} from '@angular/animations';

// Component transition animations
export const slideInDownAnimation: AnimationMetadata =
    trigger('leftInBottomOut', [
        state('*',
            style({
                opacity: 1,
                height: '*'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                height: '0'
                // transform: 'translateX(-100%)'

            }),
            animate('.8s ease-in')
        ]),
        transition(':leave', [
            animate('.8s ease-out', style({
                opacity: 0,
                height: '0'
                // transform: 'translateX(100%)'
            }))
        ])
    ]);
