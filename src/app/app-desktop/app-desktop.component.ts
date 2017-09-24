import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import 'rxjs/add/operator/filter';
import {slideInDownAnimation} from '../animations';
import {EventManager} from '@angular/platform-browser';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/throttleTime';

@Component({
    selector: 'wg-app-desktop',
    templateUrl: './app-desktop.component.html',
    animations: [slideInDownAnimation]
})
export class AppDesktopComponent implements OnDestroy {
    isNavBarCollapsed = true;
    private resizeSubject = new Subject<Window>();
    private toggler: ElementRef;

    constructor(private changeDetector: ChangeDetectorRef, private eventManager: EventManager) {
        this.eventManager.addGlobalEventListener('window', 'resize', event => {
            this.resizeSubject.next(event.target);
        });
        this.resizeSubject.asObservable()
            .throttleTime(200)
            .subscribe(_ => this.navCollapse(this.isNavBarCollapsed || this.isTogglerButtonHidden()));
    }

    @ViewChild('toggler')
    private set button(toggler: ElementRef) {this.toggler = toggler; }

    ngOnDestroy(): void {
        this.resizeSubject.unsubscribe();
    }

    navCollapse(isNavBarCollapsed: boolean) {
        this.isNavBarCollapsed = isNavBarCollapsed;
    }

    private isTogglerButtonHidden(): boolean {
        return getComputedStyle(this.toggler.nativeElement).display === 'none';
    }
}
