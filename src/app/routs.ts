import {Routes} from '@angular/router';
import {VladComponent} from './vlad.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DynamicModule} from './dynamic-component/dynamic.module';

export const GLOBAL_ROUTS: Routes = [
    {path: 'welcome', component: VladComponent},
    // {path: 'empty', loadChildren: () => DynamicModule},
    {path: 'empty', loadChildren: 'app/dynamic-component/dynamic.module#DynamicModule'},
    // {path: 'empty', component: DynamicComponent},
    {path: 'dynamicForm', component: DynamicFormComponent},
    {path: '', component: VladComponent, pathMatch: 'prefix'},
    {path: '**', redirectTo: ''}];
