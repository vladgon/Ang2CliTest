import {ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
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
    isNavbarCollapsed = true;
    @ViewChild('toggler') private button: ElementRef;
    private resizeSubject = new Subject<Window>();

    constructor(private changeDetector: ChangeDetectorRef, private eventManager: EventManager) {
        this.eventManager.addGlobalEventListener('window', 'resize', event => {
            this.resizeSubject.next(event.target);
        });
        this.resizeSubject.asObservable().throttleTime(200).subscribe(_ => this.changeDetector.markForCheck());
    }

    ngOnDestroy(): void {
        this.resizeSubject.unsubscribe();
    }

    navCollapse() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }

    private isTogglerButtonHidden(): boolean {
        return getComputedStyle(this.button.nativeElement).display === 'none';
    }
}
