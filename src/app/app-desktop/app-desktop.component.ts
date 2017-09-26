import {Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import 'rxjs/add/operator/filter';
import {EventMgr} from '../event/event-mgr/event-mgr';
import {Subscription} from 'rxjs/Subscription';
import {navBarAnimation} from './nav-animations';

@Component({
    selector: 'wg-app-desktop',
    templateUrl: './app-desktop.component.html',
    animations: [navBarAnimation],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppDesktopComponent implements OnDestroy {
    isNavBarCollapsed = true;
    private toggler: ElementRef;
    private resizeSubscription: Subscription;

    constructor(private eventMgr: EventMgr) {
        this.resizeSubscription = eventMgr.addWindowResizeListener(_ => this.navCollapse(
            this.isNavBarCollapsed),
            0,
            200);
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

    @ViewChild('toggler')
    private set button(toggler: ElementRef) {this.toggler = toggler; }

    ngOnDestroy(): void {
        if (this.resizeSubscription) {this.resizeSubscription.unsubscribe(); }
    }

    navCollapse(isNavBarCollapsed: boolean) {
        this.isNavBarCollapsed = isNavBarCollapsed || this.togglerButtonHidden;
    }
}
