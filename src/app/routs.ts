import {Routes} from '@angular/router';
import {VladComponent} from './vlad.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';

export const GLOBAL_ROUTS: Routes = [
    {path: 'welcome', component: VladComponent},
    {path: 'empty', loadChildren: () => import('app/dynamic-component/dynamic.module').then(m => m.DynamicModule)},
    {path: 'dynamicForm', component: DynamicFormComponent},
    {path: '', component: VladComponent, pathMatch: 'prefix'},
    {path: '**', redirectTo: ''}];
