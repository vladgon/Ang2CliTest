import {Component} from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'wg-app-desktop',
    templateUrl: './app-desktop.component.html',
    styles: []
})
export class AppDesktopComponent {

    isNavbarCollapsed = true;

    constructor(private router: Router) {
    }
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
