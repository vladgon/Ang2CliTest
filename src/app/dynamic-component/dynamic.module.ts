import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertDangerComponent, AlertSuccessComponent, DynamicComponent} from './dynamic.component';
import {RouterModule} from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{path: '', component: DynamicComponent}])
    ],
    declarations: [DynamicComponent]
})
export class DynamicModule {
}
