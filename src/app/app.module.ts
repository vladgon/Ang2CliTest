import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VladComponent} from './vlad.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {GLOBAL_ROUTS} from './routs';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EmptyComponent} from './empty/empty.component';
import {AlertDangerComponent, AlertSuccessComponent} from './dynamic-component/dynamic.component';
import {EventMgrModule} from './event/event-mgr/event-mgr.module';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DynamicFormQuestionComponent} from './dynamic-form/dynamic-form-question/dynamic-form-question.component';
import {DesktopModule} from './app-desktop/desktop.module';
import {AppDesktopComponent} from './app-desktop/app-desktop.component';
import {DynamicModule} from './dynamic-component/dynamic.module';


@NgModule({
    declarations: [
        VladComponent,
        AppComponent,
        EmptyComponent,
        AlertSuccessComponent, AlertDangerComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,

        DesktopModule,
        DynamicModule,
        RouterModule.forRoot(GLOBAL_ROUTS),

        NgbModule.forRoot(),
        EventMgrModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppDesktopComponent]
})
export class AppModule {
}
