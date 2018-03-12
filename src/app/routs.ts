import {Routes} from '@angular/router';
import {VladComponent} from './vlad.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DynamicComponent} from './dynamic-component/dynamic.component';

export const GLOBAL_ROUTS: Routes = [
    {path: 'welcome', component: VladComponent},
    {path: 'empty', loadChildren: 'app/dynamic-component/dynamic.module#DynamicModule'},
    {path: 'dynamicForm', component: DynamicFormComponent},
    {path: '', component: VladComponent, pathMatch: 'prefix'},
    {path: '**', redirectTo: ''}];
