import {Routes} from '@angular/router';
import {VladComponent} from './vlad.component';
import {DynamicComponentComponent} from './dynamic-component/dynamic-component.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';

export const GLOBAL_ROUTS: Routes = [
    {path: 'welcome', component: VladComponent},
    {path: 'empty', component: DynamicComponentComponent},
    {path: 'dynamicForm', component: DynamicFormComponent},
    {path: '', component: VladComponent, pathMatch: 'prefix'},
    {path: '**', redirectTo: ''}];
