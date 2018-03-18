import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppDesktopComponent} from './app-desktop.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule],
    declarations: [AppDesktopComponent],
})
export class DesktopModule {
}
