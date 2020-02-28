import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventMgr} from './event-mgr';

@NgModule({
    imports: [
        CommonModule
    ]
})
export class EventMgrModule {
    static forRoot(): ModuleWithProviders<EventMgrModule> {
        return {
            ngModule: EventMgrModule,
            providers: [EventMgr]
        };
    }
}
