import {ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import 'rxjs/add/operator/filter';
import {slideInDownAnimation} from '../animations';

@Component({
    selector: 'wg-app-desktop',
    templateUrl: './app-desktop.component.html',
    animations: [slideInDownAnimation]
})
export class AppDesktopComponent {
    @ViewChild('toggler') button: ElementRef;
    navExpanded: boolean;
    isNavbarCollapsed = true;

    constructor(private changeDetector: ChangeDetectorRef){}
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        // this.changeDetector.markForCheck();
        this.navExpanded = this.isNavExpanded();
    }

    navCollapse() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }

    isNavExpanded(): boolean {
        return getComputedStyle(this.button.nativeElement).display === 'none';
    }

    // isActive(linkName: string): boolean {
    //     return linkName === 'welcome' && (!this.routPath || this.routPath === '/') ||
    //         this.routPath && this.routPath === `/${linkName}`;
    // }
    // animateTest() {
    //     this.state = this.isNavbarCollapsed ? 'end' : 'start';
    // }
}
