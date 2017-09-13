import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'wg-app-desktop',
    templateUrl: './app-desktop.component.html',
    styles: []
})
export class AppDesktopComponent implements OnInit, OnDestroy {

    constructor(private router: Router) {
    }

    isNavbarCollapsed = true;
    // routPath: String;
    // routEvents: Subscription;

    // ngOnInit(): void {
    //     this.routEvents = this.router.events
    //         .filter(event => event instanceof NavigationEnd)
    //         // .map(() => this.activatedRoute)
    //         // .map((route) => {
    //         //     while (route.firstChild) {
    //         //         route = route.firstChild;
    //         //     }
    //         //     return route;
    //         // })
    //         // .filter((route) => route.outlet === 'primary')
    //         // .mergeMap((route) => route.data)
    //         .subscribe((event: NavigationEnd) => {
    //             this.routPath = event.url;
    //         });
    // }

    // ngOnDestroy(): void {
    //     this.routEvents.unsubscribe();
    // }

    navCollapse() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }

    // isActive(linkName: string): boolean {
    //     return linkName === 'welcome' && (!this.routPath || this.routPath === '/') ||
    //         this.routPath && this.routPath === `/${linkName}`;
    // }
}
