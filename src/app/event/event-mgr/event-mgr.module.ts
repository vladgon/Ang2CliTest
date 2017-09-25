import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventMgr} from './event-mgr';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [EventMgr]
})
export class EventMgrModule {}
