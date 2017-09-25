import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {VladComponent} from './vlad.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {AppDesktopComponent} from './app-desktop/app-desktop.component';
import {RouterModule} from '@angular/router';
import {GLOBAL_ROUTS} from './routs';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EmptyComponent} from './empty/empty.component';
import {AlertDangerComponent, AlertSuccessComponent, DynamicComponentComponent} from './dynamic-component/dynamic-component.component';
import {EventMgrModule} from './event/event-mgr/event-mgr.module';


@NgModule({
    declarations: [
        VladComponent,
        AppDesktopComponent,
        AppComponent,
        EmptyComponent,
        AlertSuccessComponent, AlertDangerComponent,
        DynamicComponentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(GLOBAL_ROUTS),
        NgbModule.forRoot(),
        EventMgrModule
    ],
    entryComponents: [AlertSuccessComponent, AlertDangerComponent],
    providers: [],
    bootstrap: [AppDesktopComponent]
})
export class AppModule {
}
