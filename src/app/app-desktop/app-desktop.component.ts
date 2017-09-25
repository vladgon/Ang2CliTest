import {ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import 'rxjs/add/operator/filter';
import {slideInDownAnimation} from '../animations';
import {EventMgr} from '../event/event-mgr/event-mgr';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'wg-app-desktop',
    templateUrl: './app-desktop.component.html',
    animations: [slideInDownAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppDesktopComponent implements OnDestroy {
    isNavBarCollapsed = true;
    private toggler: ElementRef;
    private resizeSubscription: Subscription;

    constructor(private eventMgr: EventMgr) {
        this.resizeSubscription = eventMgr.addWindowResizeListener(_ => this.navCollapse(
            this.isNavBarCollapsed || this.isTogglerButtonHidden()),
            0,
            200);
    }

    @ViewChild('toggler')
    private set button(toggler: ElementRef) {this.toggler = toggler; }

    ngOnDestroy(): void {
        if (this.resizeSubscription) {this.resizeSubscription.unsubscribe(); }
    }

    navCollapse(isNavBarCollapsed: boolean) {
        this.isNavBarCollapsed = isNavBarCollapsed;
    }

    private isTogglerButtonHidden(): boolean {
        return getComputedStyle(this.toggler.nativeElement).display === 'none';
    }
}
