import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicComponent} from './dynamic.component';
import {RouterModule} from '@angular/router';
import {AlertDangerComponent} from './alert.danger.component';
import {AlertSuccessComponent} from './alert.success.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{path: 'vlad', component: DynamicComponent}])
    ],
    declarations: [DynamicComponent, AlertSuccessComponent, AlertDangerComponent]
})
export class DynamicModule {
}
