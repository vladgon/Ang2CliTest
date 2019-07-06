import {Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {EventMgr} from '../event/event-mgr/event-mgr';
import {navBarAnimation} from './nav-animations';
import {Subscription} from 'rxjs';

@Component({
    selector: 'wg-app-desktop',
    templateUrl: './app-desktop.component.html',
    animations: [navBarAnimation],
})
export class AppDesktopComponent implements OnDestroy {
    isNavBarCollapsed = true;
    private toggler: ElementRef;
    private readonly resizeSubscription$: Subscription;

    constructor(private eventMgr: EventMgr) {
        this.resizeSubscription$ = eventMgr.addWindowResizeListener(_ => this.navCollapse(this.isNavBarCollapsed));
    }

    get animationState(): string {
        if (this.togglerButtonHidden) {
            return 'togglerHidden';
        } else {
            return this.isNavBarCollapsed ? 'collapsed' : 'expanded';
        }
    }

    get togglerButtonHidden(): boolean {
        return getComputedStyle(this.toggler.nativeElement).display === 'none';
    }

    @ViewChild('toggler', { static: true })
    private set button(toggler: ElementRef) {
        this.toggler = toggler;
    }

    ngOnDestroy(): void {
        if (this.resizeSubscription$) {
            this.resizeSubscription$.unsubscribe();
        }
    }

    navCollapse(isNavBarCollapsed: boolean) {
        this.isNavBarCollapsed = isNavBarCollapsed || this.togglerButtonHidden;
    }
}
